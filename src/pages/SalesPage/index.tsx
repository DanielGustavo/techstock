import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

import Button from '../../components/Button';
import Header from '../../components/Header';
import TemplatePage from '../../components/TemplatePage';

import * as techstock from '../../services/techstock';
import { TSale } from '../../services/techstock/loadSales';

import * as S from './styles';
import SaleCard from '../../components/SaleCard';
import { isSameMonth } from 'date-fns';

function SalesPage() {
  const [sales, setSales] = useState<TSale[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  async function loadSales() {
    try {
      setIsLoading(true);

      const result = await techstock.loadSales();
      setSales(result ?? []);
      console.log(result);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (sales !== undefined) return;

    loadSales();
  }, [sales, isLoading]);

  function getMonthString(date: Date) {
    return [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ][date.getMonth()];
  }

  return (
    <TemplatePage>
      <Header subtitle="Analise aqui suas vendas">
        <Link to="/sale">
          <Button size="x-small">Registrar venda</Button>
        </Link>
      </Header>

      {isLoading && (
        <ReactLoading
          className="center"
          color="#fefefe"
          type="spin"
          height={32}
          width={32}
        />
      )}

      {!isLoading && !sales?.length && (
        <S.EmptyContainer>
          <p>Nenhuma venda registrada.</p>
          <Link to="/sale">
            <Button size="x-small">Registrar venda</Button>
          </Link>
        </S.EmptyContainer>
      )}

      {sales && (
        <S.Sales>
          {sales.map((sale, index) => {
            const previousSale = index > 0 ? sales[index - 1] : undefined;

            if (
              !previousSale ||
              !isSameMonth(previousSale.datetime, sale.datetime)
            )
              return (
                <>
                  <h1>
                    Vendas de {getMonthString(sale.datetime)}/
                    {sale.datetime.getFullYear()}
                  </h1>
                  <SaleCard {...sale} key={`${sale.id}${index}`} />
                </>
              );

            return <SaleCard {...sale} key={`${sale.id}${index}`} />;
          })}
        </S.Sales>
      )}
    </TemplatePage>
  );
}

export default SalesPage;
