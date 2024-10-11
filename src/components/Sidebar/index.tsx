import FeatherIcon from 'feather-icons-react';

import logo from '../../assets/Logo.svg';

import * as S from './styles';

function Sidebar() {
  return (
    <S.Container>
      <header>
        <img src={logo} />

        <S.NavButtons>
          <S.NavButton
            selected={!!location.href.match(/\/stock|product/i)}
            to="/stock"
          >
            <FeatherIcon icon="package" />
            <span>Estoque</span>
          </S.NavButton>

          <S.NavButton
            selected={!!location.href.match(/\/sales|sale/i)}
            to="/sales"
          >
            <FeatherIcon icon="trending-up" />
            <span>Vendas</span>
          </S.NavButton>
        </S.NavButtons>
      </header>

      <footer>
        <S.NavButton selected={false} as="button" to="#">
          <FeatherIcon icon="log-out" />
          <span>Sair</span>
        </S.NavButton>
      </footer>
    </S.Container>
  );
}

export default Sidebar;
