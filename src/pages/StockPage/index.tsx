import Button from '../../components/Button';
import Header from '../../components/Header';
import TemplatePage from '../../components/TemplatePage';

import * as S from './styles';

function StockPage() {
  return (
    <TemplatePage>
      <Header subtitle="Analise seu estoque">
        <Button size="x-small">Adicionar produto</Button>
      </Header>
    </TemplatePage>
  );
}

export default StockPage;
