import { useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TemplatePage from '../../components/TemplatePage';

import * as techstock from '../../services/techstock';
import { TSale } from '../../services/techstock/loadSales';

import * as S from './styles';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { format } from 'date-fns';
import { TProduct } from '../../services/techstock/loadProducts';
import Select from '../../components/Select';
import SaleProductCard from '../../components/SaleProductCard';
import { TProductSale } from '../../services/techstock/loadSale';
import { toast } from 'react-toastify';

type TInputs = {
  name: string;
  description?: string;
  discount?: number;
  date_time: string;
};

function SalePage() {
  const [productsInSales, setProductsInSales] = useState<
    TProductSale[] | undefined
  >(undefined);
  const [initialProductsInSales, setInitialProductsInSales] = useState<
    TProductSale[] | undefined
  >(undefined);
  const [products, setProducts] = useState<TProduct[] | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<
    TProductSale | undefined
  >(undefined);
  const [sale, setSale] = useState<TSale | undefined>(undefined);
  const params = useLoaderData() as { saleId?: number };

  const [isFetching, setIsFetching] = useState(!!params?.saleId);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);
  const [confirmingDeletion, setConfirmingDeletion] = useState(false);

  const { register, handleSubmit, watch } = useForm<TInputs>();
  const discountInputValue = watch('discount');

  const formRef = useRef<HTMLFormElement | undefined>();

  useEffect(() => {
    if (products !== undefined) return;

    (async () => {
      const result = await techstock.loadProducts();
      setProducts(result ?? []);
    })();
  }, []);

  useEffect(() => {
    if (sale !== undefined || !params?.saleId) return;

    setIsFetching(true);

    (async () => {
      const result = await techstock.loadSale(params.saleId as number);
      setSale(result.sale);
      setProductsInSales(result.products);
      setInitialProductsInSales([...result.products]);
      setIsFetching(false);
    })();
  }, []);

  function submitForm() {
    if (!formRef.current) return;

    formRef.current.dispatchEvent(new Event('submit', { bubbles: true }));
  }

  async function onSubmit(inputs: TInputs) {
    if (!inputs.name) {
      toast('Insira o nome da venda', { type: 'error' })
      return
    }

    if (!productsInSales?.length) {
      toast('Adicione pelo menos um produto', { type: 'error' })
      return
    }

    setIsLoadingSubmit(true);

    if (!sale) {
      const res = await techstock.createSale(inputs, productsInSales ?? []);
      setIsLoadingSubmit(false);
      location.href = `/sale/${res.id}`;
    } else {
      const productsToDeleteInSales =
        initialProductsInSales?.filter((initialProduct) => {
          return !productsInSales?.find(
            ({ saleproduct_id }) =>
              initialProduct.saleproduct_id === saleproduct_id
          );
        }) ?? [];

      await techstock.updateSale(
        { ...sale, ...inputs },
        productsInSales ?? [],
        productsToDeleteInSales
      );
      setSale({ ...sale, ...(inputs as any) });
      setIsLoadingSubmit(false);
    }
  }

  async function deleteSale() {
    if (!sale) return;

    if (!confirmingDeletion) {
      setConfirmingDeletion(true);

      setTimeout(() => {
        setConfirmingDeletion(false);
      }, 1000);
      return;
    }

    setIsLoadingDeletion(true);
    await techstock.deleteSale(sale.id);
    setIsLoadingDeletion(false);

    location.href = '/sales';
  }

  function getTotalPrice() {
    const prices =
      productsInSales?.map((product) => {
        return product.price * product.quantity;
      }) ?? [];

    const discount = discountInputValue ?? sale?.discount ?? 0;

    return prices.reduce((prev = 0, cur = 0) => prev + cur, 0) - discount;
  }

  function addProduct() {
    if (!selectedProduct) return;

    setProductsInSales((state) => [
      ...(state ?? []),
      { ...selectedProduct, quantity: 1 },
    ]);

    setSelectedProduct(undefined);
  }

  function filterNonSelectedProducts(product: TProduct) {
    const selectedIds = productsInSales?.map(({ id }) => id);

    if (!selectedIds) return true;

    return selectedIds.includes(product.id) === false;
  }

  function getProductMaxQuantity(id: number) {
    return products?.find((product) => product.id === id)?.quantity ?? 0;
  }

  if (isFetching) {
    return (
      <TemplatePage>
        <ReactLoading
          className="center"
          color="#fefefe"
          type="spin"
          height={32}
          width={32}
        />
      </TemplatePage>
    );
  }

  return (
    <TemplatePage>
      <Header
        subtitle={
          sale ? (
            <>
              Edite a venda <span>{sale.name ?? `Venda #${sale.id}`}</span>
            </>
          ) : (
            'Registre aqui sua venda'
          )
        }
        backUrl="/sales"
      >
        {sale && (
          <Button
            variation="error"
            outlined={!confirmingDeletion}
            onClick={deleteSale}
            size="x-small"
          >
            Remover
            {isLoadingDeletion && (
              <ReactLoading
                color="#0A0A0A"
                type="spin"
                height={15}
                width={15}
              />
            )}
          </Button>
        )}

        <Button size="x-small" onClick={submitForm}>
          {sale ? 'Salvar alterações' : 'Registrar venda'}

          {isLoadingSubmit && (
            <ReactLoading color="#0A0A0A" type="spin" height={15} width={15} />
          )}
        </Button>
      </Header>

      <S.Container ref={formRef as any} onSubmit={handleSubmit(onSubmit)}>
        <S.SaleContainer>
          <h1>Dados gerais</h1>

          <Input
            label="Título"
            placeholder="Título da venda"
            {...register('name')}
            defaultValue={sale?.name}
          />
          <Input
            label="Descrição"
            placeholder="Descrição da venda"
            textarea
            {...register('description')}
            defaultValue={sale?.description}
          />

          <S.InputGroup>
            <Input
              label="Desconto"
              type="number"
              placeholder="Desconto"
              {...register('discount')}
              defaultValue={sale?.discount ?? 0}
            />
            <Input
              label="Data"
              type="datetime-local"
              placeholder="Data da venda"
              {...register('date_time')}
              defaultValue={format(
                sale?.date_time ?? new Date(),
                'yyyy-MM-dd hh:mm'
              )}
            />
          </S.InputGroup>
        </S.SaleContainer>

        <S.ProductsContainer>
          <header>
            <h1>Produtos</h1>
            <b>
              Total: <span>R${getTotalPrice().toFixed(2)}</span>
            </b>
          </header>

          <S.ProductsInnerContainer>
            <S.ProductsSelectContainer>
              <Select
                label="Produto"
                placeholder="Selecione um produto"
                noOptionsMessage={() => 'Nada para mostrar'}
                options={products
                  ?.filter(filterNonSelectedProducts)
                  ?.map((product) => ({
                    label: product.name,
                    value: product.id,
                  }))}
                onChange={(option) => {
                  setSelectedProduct(
                    products?.find(({ id }) => id === option.value)
                  );
                }}
              />

              <Button outlined onClick={addProduct}>
                Adicionar
              </Button>
            </S.ProductsSelectContainer>

            <S.ProductsList>
              {productsInSales?.map((product, index) => (
                <SaleProductCard
                  product={product}
                  key={`${product.id}${index}`}
                  maxQuantity={sale ? undefined : getProductMaxQuantity(product.id)}
                  onChange={(value) => {
                    setProductsInSales((state) => {
                      const saleProduct = state?.find(
                        ({ id }) => id === product.id
                      );

                      if (!saleProduct) return state;

                      if (value > 0) {
                        saleProduct.quantity = value;
                      } else {
                        state = state?.filter(({ id }) => id !== product.id);
                      }

                      return [...(state ?? [])];
                    });
                  }}
                />
              ))}
            </S.ProductsList>
          </S.ProductsInnerContainer>
        </S.ProductsContainer>
      </S.Container>
    </TemplatePage>
  );
}

export default SalePage;
