import styled from 'styled-components';

export const Container = styled.div`
  background: #0a0a0a;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 64px;

  h1 {
    text-transform: capitalize;
  }
`;

export const Header = styled.header`
  margin: 0 10%;
  width: 80%;

  padding: 24px 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    gap: 8px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;

  div {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 40%;

    header {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h1 {
        font-size: 48px;
        font-weight: 600;
        color: #fefefe;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        color: #f1efe6;
      }
    }
  }

  img {
    width: 50%;
  }
`;

export const CenterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 80%;
  margin: 0 10%;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    width: 60%;
    margin: 0 auto;

    h1 {
      font-size: 36px;
      font-weight: 600;
      color: #fefefe;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      color: #f1efe6;
      width: 65%;
    }
  }
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 32px 10%;
  width: 100%;

  background: linear-gradient(
    178.71deg,
    rgba(255, 255, 255, 0.04) -36.13%,
    rgba(10, 10, 10, 0.04) 77.8%
  );

  button {
    width: 55%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 55%;

    h1 {
      font-size: 48px;
      font-weight: 600;
      color: #fefefe;

      span {
        background: linear-gradient(200.5deg, #06f08d 40.5%, #ffcc00 99.8%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }

    p {
      font-size: 16px;
      font-weight: 300;
      color: #f1efe6;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 32px;

  p {
    font-size: 16px;
    font-weight: 300;
    color: #f1efe6;
  }

  img {
    height: 30px;
  }
`;
