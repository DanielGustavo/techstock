import { lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(252.48deg, #06f08d -7.36%, #111522 89%);
  }
  20% {
    background: linear-gradient(249deg, #06f08d -6.5%, #111522 90%);
  }
  40% {
    background: linear-gradient(245.5deg, #06f08d -6%, #111522 91%);
  }
  60% {
    background: linear-gradient(242deg, #06f08d -5.5%, #111522 92%);
  }
  80% {
    background: linear-gradient(238.5deg, #06f08d -5%, #111522 93%);
  }
  100% {
    background: linear-gradient(235deg, #06f08d -4.5%, #111522 94%);
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  width: 100%;
  list-style: none;
`;

export type TCard = {
  clickable?: boolean;
};

export const Card = styled.li<TCard>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 15px;
  align-self: stretch;
  min-height: 237.6px;

  max-width: 375px;

  background: ${({ clickable }) =>
    clickable
      ? 'linear-gradient(252.48deg, #06f08d -7.36%, #111522 89%)'
      : lighten(0.04, '#0A0A0A')};

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};

  b {
    font-size: 20px;
    font-weight: 700;
    color: #fefefe;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: #fefefe;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ${({ clickable }) => {
    if (!clickable) return;

    return css`
      transition: 300ms;

      &:hover {
        transform: scale(1.015);
        animation: ${gradientAnimation} 300ms ease-in-out forwards;
      }

      &:active {
        transform: scale(1);
      }
    `;
  }}
`;

export const CardIcon = styled.div`
  padding: 10px;
  border-radius: 100%;
  background: #06f08d;
  width: 60px;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #0a0a0a;
  }
`;

export const CardButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  background: #fefefe;
  width: 60px;
  aspect-ratio: 1;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #0a0a0a;
  }

  transition: 300ms;
  &:hover {
    transform: scale(1.015);
  }

  &:active {
    transform: scale(1);
  }
`;
