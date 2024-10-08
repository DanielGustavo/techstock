import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 8px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    color: #fefefe;
  }

  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 14px;
      font-weight: 400;
      color: #aeaeae;
    }

    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #fefefe;

      span {
        color: #06f08d;
      }
    }
  }
`;
