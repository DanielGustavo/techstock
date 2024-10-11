import styled, { css } from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 32px;
`;

export const SaleContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  padding: 32px;
  border: 1px solid #191919;
  border-radius: 10px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #fefefe;
  }
`;

export const ProductsContainer = styled.div`
  padding: 32px;
  border: 1px solid #191919;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  max-height: 80vh;
  overflow: auto;

  header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    b {
      font-size: 16px;
      font-weight: 600;
      color: #fefefe;

      span {
        color: #06f08d;
      }
    }

    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #fefefe;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 16px;

  label {
    flex: 1;
  }
`;

export const ProductsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductsSelectContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  :nth-child(1) {
    flex: 1;
  }
`;
