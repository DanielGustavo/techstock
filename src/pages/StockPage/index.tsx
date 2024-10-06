import * as S from './styles';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Header from '../../components/Header';

function StockPage() {
  return (
    <S.TemplateContainer>
      <Sidebar />

      <S.Container>
        <Header subtitle="Analise seu estoque">
          <Button size="x-small">Adicionar produto</Button>
        </Header>
      </S.Container>
    </S.TemplateContainer>
  );
}

export default StockPage;
