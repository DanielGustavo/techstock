import { PropsWithChildren, useEffect } from 'react';

import Sidebar from '../../components/Sidebar';

import * as S from './styles';
import { getUser } from '../../utils/getUser';

function TemplatePage({ children }: PropsWithChildren) {
  useEffect(() => {
    const user = getUser();

    if (!user) {
      location.href = '/';
    }
  }, []);

  return (
    <S.Container>
      <Sidebar />

      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Container>
  );
}

export default TemplatePage;
