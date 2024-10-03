import FeatherIcon from 'feather-icons-react';

import * as S from './styles';

function ServicesList() {
  return (
    <S.Container>
      {cards.map((card, index) => (
        <S.Card key={card.title + index}>
          <S.CardIcon>
            <FeatherIcon icon={card.icon} strokeWidth={2} size={30} />
          </S.CardIcon>

          <div>
            <b>{card.title}</b>
            <p>{card.description}</p>
          </div>
        </S.Card>
      ))}

      <S.Card clickable>
        <S.CardButton>
          <FeatherIcon icon="chevron-right" strokeWidth={2} size={30} />
        </S.CardButton>

        <div>
          <b>Comece Agora!</b>
          <p>Gostou do que viu? Então clique aqui e começe agora!</p>
        </div>
      </S.Card>
    </S.Container>
  );
}

type TCard = {
  title: string;
  icon: string;
  description: string;
};

const cards: TCard[] = [
  {
    icon: 'package',
    title: 'Controle de Estoque',
    description: 'Controle o fluxo de entrada e saída de produtos.',
  },
  {
    icon: 'dollar-sign',
    title: 'Relatórios de Vendas',
    description:
      'Dados detalhados para entender o desempenho de cada produto e tomar decisões informadas.',
  },
  {
    icon: 'lock',
    title: 'Segurança em primeiro lugar',
    description:
      'A segurança dos seus dados e da sua loja são nossa prioridade!',
  },
  {
    icon: 'pie-chart',
    title: 'Fácil de usar',
    description: 'Nós lhe ajudaremos a controlar seu estoque com facilidade.',
  },
];

export default ServicesList;
