import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #191919;

  border-radius: 10px;
  padding: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  b {
    font-weight: 600;
    font-size: 16px;
    color: #06f08d;
  }

  transition: 300ms;
  &:hover {
    transform: scale(1.015);
    background: ${lighten(0.04, '#191919')};
  }

  &:active {
    transform: scale(1);
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  gap: 0px !important;

  b {
    font-weight: 600;
    font-size: 14px;
    color: #fefefe;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    color: #aeaeae;
  }
`;

export const IconContainer = styled.div`
  padding: 12px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  background: linear-gradient(252.48deg, #06f08d -7.36%, #111522 89%);

  color: #fefefe;
`;
