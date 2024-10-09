import styled from 'styled-components';

export const Sales = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: #fefefe;
    font-weight: 600;
    font-size: 20px;
  }

  a + h1 {
    margin-top: 24px;
  }

  border-radius: 10px;
  border: 1px solid #191919;
  padding: 32px;
`;

export const EmptyContainer = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    color: #aeaeae;
    font-size: 20px;
    font-weight: 300;
  }
`;
