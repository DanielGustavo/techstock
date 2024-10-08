import FeatherIcon from 'feather-icons-react';
import { useEffect, useRef, useState } from 'react';
import ReactLoading from 'react-loading';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TemplatePage from '../../components/TemplatePage';
import Select from '../../components/Select';

import * as techstock from '../../services/techstock';
import { TBrand } from '../../services/techstock/loadBrands';

import * as S from './styles';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { TProduct } from '../../services/techstock/loadProducts';

type TInputs = {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  brand?: number | string;
};

function ProductPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [brands, setBrands] = useState<TBrand[] | undefined>(undefined);
  const [product, setProduct] = useState<TProduct | undefined>(undefined);
  const params = useLoaderData() as { productId?: number };

  const [isFetching, setIsFetching] = useState(!!params?.productId);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const { register, handleSubmit, setValue } = useForm<TInputs>();

  const formRef = useRef<HTMLFormElement | undefined>();

  function onLoad(e: any) {
    setImageUrl(
      e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : undefined
    );
  }

  function removeImg() {
    const imgInput = document.querySelector('#productImage');
    if (!imgInput) return;

    (imgInput as any).value = '';
    imgInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

  useEffect(() => {
    if (brands !== undefined) return;

    (async () => {
      const result = await techstock.loadBrands();
      setBrands(result ?? []);
    })();
  }, []);

  useEffect(() => {
    if (product !== undefined || !params?.productId) return;

    setIsFetching(true);

    (async () => {
      const result = await techstock.loadProduct(params.productId as number);
      setProduct(result);
      setIsFetching(false);
    })();
  }, []);

  function submitForm() {
    if (!formRef.current) return;

    formRef.current.dispatchEvent(new Event('submit', { bubbles: true }));
  }

  async function onSubmit(inputs: TInputs) {
    inputs.quantity = Number(inputs.quantity);
    inputs.price = Number(inputs.price);

    if (typeof inputs.brand === 'string') {
      const brand = await techstock.createBrand(inputs.brand);
      inputs.brand = brand.id;
    }

    setIsLoadingSubmit(true);

    if (!product) {
      const res = await techstock.createProduct(inputs);
      setIsLoadingSubmit(false);
      location.href = `/product/${res.id}`;
    } else {
      await techstock.updateProduct({ ...product, ...inputs });
      setProduct({ ...product, ...(inputs as any) });
      setIsLoadingSubmit(false);
    }
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
          product ? (
            <>
              Edite o produto <span>{product.name}</span>
            </>
          ) : (
            'Registre aqui seu produto'
          )
        }
        backUrl="/stock"
      >
        <Button size="x-small" onClick={submitForm}>
          {product ? 'Salvar alterações' : 'Salvar produto'}

          {isLoadingSubmit && (
            <ReactLoading color="#0A0A0A" type="spin" height={15} width={15} />
          )}
        </Button>
      </Header>

      <S.Container ref={formRef as any} onSubmit={handleSubmit(onSubmit)}>
        <S.ProductDataContainer>
          <h1>Dados do produto</h1>

          <Input
            label="Produto"
            placeholder="Nome do produto"
            {...register('name')}
            defaultValue={product?.name}
          />
          <Input
            label="Descrição"
            placeholder="Descrição do produto"
            textarea
            {...register('description')}
            defaultValue={product?.description}
          />

          <S.InputGroup>
            <Input
              label="Preço (R$)"
              type="number"
              placeholder="Preço do produto"
              {...register('price')}
              defaultValue={product?.price}
            />
            <Input
              label="Quantidade"
              type="number"
              placeholder="Quantidade em estoque"
              {...register('quantity')}
              defaultValue={product?.quantity}
            />
          </S.InputGroup>

          <Select
            label="Marca"
            placeholder="Selecione uma marca"
            noOptionsMessage={() => 'Sem marcas registradas'}
            creatable
            options={brands?.map((brand) => ({
              label: brand.name,
              value: brand.id,
            }))}
            onChange={(option) =>
              setValue('brand', option.value ?? option.label)
            }
            defaultValue={
              product
                ? {
                    value: product?.brand?.id,
                    label: product?.brand?.name,
                  }
                : undefined
            }
          />
        </S.ProductDataContainer>

        <S.PreviewContainer>
          <div>
            <h1>Preview</h1>

            <S.ImageContainer filled={!!imageUrl}>
              {!imageUrl ? (
                <>
                  <span />
                  <FeatherIcon icon="image" size={100} strokeWidth={0.7} />

                  <p>
                    <FeatherIcon icon="upload" size={20} strokeWidth={2} />
                    Adicione a imagem do produto <span>Aqui</span>
                  </p>
                </>
              ) : (
                <img src={imageUrl} />
              )}

              <input
                type="file"
                hidden
                accept="image/png, image/jpeg"
                onChange={onLoad}
                id="productImage"
              />
            </S.ImageContainer>
          </div>

          <Button variation="error" outlined size="x-small" onClick={removeImg}>
            Remover imagem
          </Button>
        </S.PreviewContainer>
      </S.Container>
    </TemplatePage>
  );
}

export default ProductPage;
