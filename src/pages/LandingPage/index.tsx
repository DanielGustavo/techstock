import * as S from './styles';

import Button from '../../components/Button';

import ServicesList from './partials/ServicesList';
import EvaluationsList from './partials/EvaluationsList';

import logo from '../../assets/Logo.svg';
import heroImg from '../../assets/HeroImg.svg';

function LandingPage() {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} />

        <div>
          <Button outlined variation="light">
            Entrar
          </Button>
          <Button variation="primary">Registrar-se</Button>
        </div>
      </S.Header>

      <S.HeroSection>
        <div>
          <header>
            <h1>Gerencie Seu Estoque de Tecnologia de Forma Inteligente.</h1>
            <p>
              Simplifique o controle de eletrônicos, PCs e acessórios com a
              plataforma completa de gerenciamento de produtos.
            </p>
          </header>

          <Button size="medium">Comece agora!</Button>
        </div>

        <img src={heroImg} />
      </S.HeroSection>

      <S.CenterSection>
        <header>
          <h1>Oferecemos um serviço de qualidade</h1>
          <p>
            Nosso sistema foi projetado para otimizar sua loja de eletrônicos.
            Veja como podemos ajudar a maximizar sua eficiência.
          </p>
        </header>

        <ServicesList />
      </S.CenterSection>

      <S.CenterSection>
        <header>
          <h1>O que nossos clientes dizem</h1>
          <p>
            Veja como o TechStock está ajudando lojistas como você a crescer.
          </p>
        </header>

        <EvaluationsList />
      </S.CenterSection>

      <S.CTASection>
        <div>
          <h1>
            Pronto para levar sua loja para o <span>próximo nível</span>?
          </h1>
          <p>
            Não perca mais tempo! Experimente o TechStock e veja como podemos
            otimizar seu negócio.
          </p>
        </div>

        <Button size="medium">Começar agora</Button>
      </S.CTASection>

      <S.Footer>
        <p>©Copyright 2024</p>
        <img src={logo} />
      </S.Footer>
    </S.Container>
  );
}

export default LandingPage;
