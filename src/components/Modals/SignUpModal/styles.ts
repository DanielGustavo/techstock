import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  min-width: 500px;
  height: 85vh;
  max-height: 629px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 24px;
      font-weight: 600;
      color: #fefefe;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      color: #f1efe6;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  flex: 1;
  justify-content: center;

  div.inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    button {
      width: 100%;
    }

    p {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 300;
      color: #f1efe6;

      span {
        cursor: pointer;
        font-weight: 600;
        color: #06f08d;

        transition: 300ms;
        &:hover {
          color: ${lighten(0.1, '#06f08d')};
        }

        &:active {
          color: ${darken(0.1, '#06f08d')};
        }

        display: flex;
        align-items: center;
        gap: 2px;
      }
    }
  }
`;
