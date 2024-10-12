import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type TNavButton = {
  selected: boolean;
};

export const Container = styled.aside`
  position: relative;
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

  div:has(svg) {
    margin-left: auto;
  }

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

export const PdfView = styled.div`
  position: absolute;
  width: 100vw;
  pointer-events: none;
  color: #0a0a0a;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  z-index: -1;
  padding: 24px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    color: #0a0a0a;
    font-weight: 400;
    font-size: 14px;

    span {
      font-weight: 600;
      color: #06f08d;
    }
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    border-bottom: 1px solid #191919;
    padding-bottom: 24px;

    small {
      color: #0a0a0a;
      font-weight: 600;
      font-size: 11px;
    }
  }

  ul {
    list-style: none;

    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    li {
      border: 1px solid #191919;
      border-radius: 10px;
      width: 100%;
      padding: 10px;

      color: #0a0a0a;
      font-weight: 400;
      font-size: 16px;

      display: flex;
      flex-direction: column;
      gap: 8px;

      div {
        display: flex;
        flex-direction: row;
      }

      span {
        font-weight: 600;
      }
    }
  }
`;
