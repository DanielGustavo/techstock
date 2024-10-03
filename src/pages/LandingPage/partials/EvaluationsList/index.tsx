import * as S from './styles';

import avatar1 from '../../../../assets/avatar1.png';
import avatar2 from '../../../../assets/avatar2.png';
import avatar3 from '../../../../assets/avatar3.png';

function EvaluationsList() {
  return (
    <S.Container>
      {evaluations.map((evaluation, index) => (
        <S.Evaluation key={evaluation.name + index}>
          <img src={evaluation.avatar} />

          <div>
            <b>{evaluation.name}</b>
            <p>{`"${evaluation.description}"`}</p>
          </div>
        </S.Evaluation>
      ))}
    </S.Container>
  );
}

type TEvaluation = {
  name: string;
  description: string;
  avatar: string;
};

const evaluations: TEvaluation[] = [
  {
    name: 'Loja TechZone',
    description:
      'Com o TechStock, aumentamos nossa eficiência em 30%! A integração com marketplaces foi essencial para o crescimento da nossa loja.',
    avatar: avatar1,
  },
  {
    name: 'Eletrônicos Plus',
    description:
      'A plataforma é intuitiva e fácil de usar. Adoramos as funcionalidades de controle de estoque.',
    avatar: avatar2,
  },
  {
    name: 'PCMasterStore',
    description:
      'Gerenciar minha loja nunca foi tão fácil. O suporte da equipe TechStock também é excelente.',
    avatar: avatar3,
  },
];

export default EvaluationsList;
