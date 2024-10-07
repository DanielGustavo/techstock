import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type TNavButton = {
  selected: boolean;
};

export const Container = styled.aside`
  background: #0a0a0a;
  position: sticky;
  top: 0;

  height: 100vh;
  overflow-y: auto;
  padding: 24px 16px;

  width: fit-content;
  min-width: 247px;

  border-right: 1px solid #191919;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;

    img {
      width: 144px;
    }
  }
`;

export const NavButtons = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NavButton = styled(Link)<TNavButton>`
  width: 100%;
  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  text-decoration: none;
  color: #aeaeae;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  transition: 300ms;

  span {
    font-size: 14px;
    font-weight: 600;
  }
  background: none;
  border: none;

  ${({ selected }) => {
    if (!selected)
      return css`
        &:hover {
          background: ${darken(0.045, '#191919')};
          color: ${darken(0.15, '#fefefe')};

          transform: scale(1.015);
        }

        &:active {
          transform: scale(1);
        }
      `;

    return css`
      background: #191919;
      color: #fefefe;
    `;
  }}
`;
