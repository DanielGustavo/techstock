import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import Button from '../../components/Button';
import Header from '../../components/Header';
import TemplatePage from '../../components/TemplatePage';

import * as techstock from '../../services/techstock';
import { TProduct } from '../../services/techstock/loadProducts';

import * as S from './styles';
import ProductCard from '../../components/ProductCard';

function StockPage() {
  const [products, setProducts] = useState<TProduct[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function loadProducts() {
    try {
      setIsLoading(true);

      const result = await techstock.loadProducts();
      setProducts(result);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (products !== undefined || isLoading) return;

    loadProducts();
  }, [products, isLoading]);

  function removeProduct(id: number) {
    setProducts((products) => {
      return products?.filter((product) => product.id !== id);
    });
  }

  return (
    <TemplatePage>
      <Header subtitle="Analise seu estoque">
        <Button size="x-small">Adicionar produto</Button>
      </Header>

      {isLoading && (
        <ReactLoading
          className="center"
          color="#fefefe"
          type="spin"
          height={32}
          width={32}
        />
      )}

      {!isLoading && !products?.length && (
        <S.EmptyContainer>
          <p>Nenhum produto cadastrado no estoque.</p>
          <Button size="x-small">Adicionar Produto</Button>
        </S.EmptyContainer>
      )}

      {products && (
        <S.Products>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id + product.name}
              onDelete={removeProduct}
            />
          ))}
        </S.Products>
      )}
    </TemplatePage>
  );
}

export default StockPage;
