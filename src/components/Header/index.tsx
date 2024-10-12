import { PropsWithChildren, ReactNode } from 'react';

import * as S from './styles';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { getUser } from '../../utils/getUser';

type THeader = PropsWithChildren & {
  subtitle: string | ReactNode;
  backUrl?: string;
};

function Header({ children, subtitle, backUrl }: THeader) {
  const user = getUser();

  return (
    <S.Container>
      <S.TitleContainer>
        {backUrl && (
          <Link to={backUrl}>
            <FeatherIcon icon="arrow-left" size={20} />
          </Link>
        )}

        <div>
          <h2>Olá, {user?.name ?? ''}</h2>
          <h1>{subtitle}</h1>
        </div>
      </S.TitleContainer>

      <nav>{children}</nav>
    </S.Container>
  );
}

export default Header;
