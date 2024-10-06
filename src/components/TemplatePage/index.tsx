import { PropsWithChildren } from 'react';

import Sidebar from '../../components/Sidebar';

import * as S from './styles';

function TemplatePage({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Sidebar />

      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Container>
  );
}

export default TemplatePage;
