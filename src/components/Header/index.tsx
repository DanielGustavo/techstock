import { PropsWithChildren, ReactNode } from 'react';

import * as S from './styles';

type THeader = PropsWithChildren & {
  subtitle: string | ReactNode;
};

function Header({ children, subtitle }: THeader) {
  return (
    <S.Container>
      <div>
        <h2>Olá, Daniel</h2>
        <h1>{subtitle}</h1>
      </div>

      <nav>{children}</nav>
    </S.Container>
  );
}

export default Header;
