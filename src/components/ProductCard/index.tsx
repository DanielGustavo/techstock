import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Button from '../Button';

import { TProduct } from '../../services/techstock/loadProducts';
import * as techstock from '../../services/techstock';

import * as S from './styles';
import FeatherIcon from 'feather-icons-react';

type TProductCard = {
  product: TProduct;
  onDelete?: (id: number) => void;
};

function ProductCard({ product, onDelete }: TProductCard) {
  const [isConfirmingDeletion, setIsConfirmingDeletion] = useState(false);
  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);

  const timeoutRef = useRef<number>();

  async function onClickDelete() {
    if (!isConfirmingDeletion) {
      setIsConfirmingDeletion(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsConfirmingDeletion(false);
      }, 1000);

      return;
    }

    setIsLoadingDeletion(true);
    clearTimeout(timeoutRef.current);

    try {
      await techstock.deleteProduct(product.id);
    } finally {
      setIsLoadingDeletion(false);
    }

    if (onDelete) onDelete(product.id);
  }

  return (
    <S.Container>
      <S.Body>
        <div>
          <S.ImageContainer>
            {product.thumbnailPathname ? (
              <img src={product.thumbnailPathname} />
            ) : (
              <FeatherIcon icon="image" />
            )}
          </S.ImageContainer>

          <S.Description>
            <header>
              <b>{product.name}</b>
              <p>{product.description}</p>
            </header>

            <ul>
              <li>
                Quantidade: <span>{product.quantity}</span>
              </li>
              <li>
                Marca: <span>{product.brand?.name}</span>
              </li>
            </ul>
          </S.Description>
        </div>

        <p>R${product.price.toFixed(2)}</p>
      </S.Body>

      <S.Footer>
        <Button
          className="small"
          outlined={!isConfirmingDeletion}
          variation="error"
          onClick={onClickDelete}
          disabled={isLoadingDeletion}
        >
          Remover
          {isLoadingDeletion && (
            <ReactLoading color="#fefefe" type="spin" height={16} />
          )}
        </Button>

        <Link to={`/product/${product.id}`}>
          <Button>Editar</Button>
        </Link>
      </S.Footer>
    </S.Container>
  );
}

export default ProductCard;
