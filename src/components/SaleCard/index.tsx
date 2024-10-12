import { format } from 'date-fns';
import ReactLoading from 'react-loading';

import { TSale } from '../../services/techstock/loadSales';

import * as S from './styles';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';

import * as techStock from '../../services/techstock';

type TSaleCard = TSale;

function SaleCard({ name, id, date_time }: TSaleCard) {
  const [value, setValue] = useState(undefined as undefined | number);

  useEffect(() => {
    (async () => {
      const sale = await techStock.loadSale(id);

      const totalPrice =
        sale.products.reduce((prev, curr) => {
          return prev + curr.price * curr.quantity;
        }, 0) - (sale.sale.discount ?? 0);

      setValue(totalPrice);
    })();
  }, []);

  return (
    <S.Container to={`/sale/${id}`}>
      <div>
        <S.IconContainer>
          <FeatherIcon icon="shopping-bag" size={22} />
        </S.IconContainer>

        <S.Desc>
          <b>{name ?? `Venda #${id}`}</b>
          <p>{format(date_time, 'dd/MM/yyyy hh:mm')}</p>
        </S.Desc>
      </div>

      {value !== undefined ? (
        <b>R${(value || 0).toFixed(2)}</b>
      ) : (
        <b>
          <ReactLoading color="#06f08d" type="spin" height={15} width={15} />
        </b>
      )}
    </S.Container>
  );
}

export default SaleCard;
