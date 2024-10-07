import styled from 'styled-components';

export const Products = styled.div`
  display: flex;
  gap: 16px 8px;
  flex-wrap: wrap;
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
