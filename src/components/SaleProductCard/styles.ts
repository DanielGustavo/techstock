import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  border-radius: 10px;
  border: 1px solid #191919;
`;

export const Body = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  padding: 16px;

  div {
    display: flex;
    gap: 12px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: #06f08d;

    margin: auto 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    flex-direction: column;

    b {
      color: #fefefe;
      font-weight: 700;
      font-size: 14px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
    list-style: none;

    li {
      font-weight: 500;
      font-size: 12px;
      color: #fefefe;

      span {
        color: #06f08d;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1;
  min-width: 96px;
  border-radius: 6px;
  background: #191919;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #aeaeae;

  overflow: hidden;
  img {
    max-width: 96px;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

export const NumberInput = styled.div`
  display: flex;
  gap: 0px !important;

  button {
    border: none;
    background: #06f08d;
    color: #191919;
    border-radius: 5px 0px 0px 5px;
    padding: 4px;

    width: 20px;
    aspect-ratio: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input + button {
    border-radius: 0px 5px 5px 0px;
  }

  input {
    border: none;
    background: #161616;
    color: #fefefe;
    font-size: 12px;
    font-weight: 500;
    padding: 0;

    max-width: 25px;
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
