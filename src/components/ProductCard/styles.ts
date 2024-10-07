import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: calc(50% - 8px);

  border-radius: 10px;
  border: 1px solid #191919;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  gap: 32px;
  padding: 16px 16px 0px 16px;

  div {
    display: flex;
    gap: 12px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: #06f08d;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    flex-direction: column;

    b {
      color: #fefefe;
      font-weight: 700;
      font-size: 14px;
    }

    p {
      color: #aeaeae;
      font-weight: 300;
      font-size: 12px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style: none;

    li {
      font-weight: 500;
      font-size: 12px;
      color: #fefefe;

      span {
        color: #06f08d;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1;
  min-width: 130px;
  border-radius: 6px;
  background: #191919;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #aeaeae;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 8px;
  padding: 0px 16px 16px 16px;

  button.small {
    max-width: 130px;
    width: 130px;
  }

  a {
    flex: 1;
  }

  a button {
    width: 100%;
  }
`;
