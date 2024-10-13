import { useRef } from 'react';
import FeatherIcon from 'feather-icons-react';

import { TProduct } from '../../services/techstock/loadProducts';

import * as S from './styles';

type TSaleProductCard = {
  product: TProduct;
  maxQuantity: number;
  onChange?: (value: number) => void;
};

function SaleProductCard({ product, onChange, maxQuantity }: TSaleProductCard) {
  const numberInputRef = useRef<any>();

  function decreaseQuantity() {
    const input = numberInputRef.current;
    if (!input) return;

    input.value = input.valueAsNumber - 1;
    if (onChange) onChange(input.valueAsNumber);
  }

  function increaseQuantity() {
    const input = numberInputRef.current;
    if (!input) return;

    input.value =
      input.valueAsNumber + 1 > maxQuantity
        ? maxQuantity
        : input.valueAsNumber + 1;
    if (onChange) onChange(input.valueAsNumber);
  }
  console.log({ product });
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
              <b>{product.name ?? '???'}</b>
            </header>

            <ul>
              <li>
                Preço: <span>R${product.price.toFixed(2)}</span>
              </li>
              <li>
                Marca:{' '}
                <span>
                  {product.brand?.name ?? (product as any)?.brand ?? '???'}
                </span>
              </li>
            </ul>

            <S.NumberInput>
              <button type="button" onClick={() => decreaseQuantity()}>
                <FeatherIcon icon="minus" size={10} />
              </button>

              <input
                ref={numberInputRef}
                type="number"
                defaultValue={product.quantity ?? 1}
                onChange={(e) => {
                  console.log({ maxQuantity });
                  if (e.target.valueAsNumber > maxQuantity) {
                    e.target.value = maxQuantity as any;
                    e.preventDefault();
                  }

                  if (onChange) onChange(e.target.valueAsNumber);
                }}
              />

              <button type="button" onClick={() => increaseQuantity()}>
                <FeatherIcon icon="plus" size={10} />
              </button>
            </S.NumberInput>
          </S.Description>
        </div>

        <p>R${(product.price * product.quantity).toFixed(2)}</p>
      </S.Body>
    </S.Container>
  );
}

export default SaleProductCard;
