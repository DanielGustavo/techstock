import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 16px;

  width: 100%;
  list-style: none;
`;

export const Evaluation = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  max-width: 375px;
  padding: 32px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 8px;

    b {
      font-size: 20px;
      font-weight: 700;
      color: #fefefe;
    }

    p {
      font-size: 16px;
      font-style: italic;
      font-weight: 300;
      color: #fefefe;
    }
  }
`;
