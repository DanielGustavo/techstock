import { format } from 'date-fns';

import { TSale } from '../../services/techstock/loadSales';

import * as S from './styles';
import FeatherIcon from 'feather-icons-react';

type TSaleCard = TSale;

function SaleCard({ name, id, datetime, totalValue }: TSaleCard) {
  return (
    <S.Container to={`/sale/${id}`}>
      <div>
        <S.IconContainer>
          <FeatherIcon icon="shopping-bag" size={22} />
        </S.IconContainer>

        <S.Desc>
          <b>{name ?? `Venda #${id}`}</b>
          <p>{format(datetime, 'dd/MM/yyyy hh:mm')}</p>
        </S.Desc>
      </div>

      <b>R${totalValue?.toFixed(2)}</b>
    </S.Container>
  );
}

export default SaleCard;
