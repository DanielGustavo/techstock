import styled, { css } from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 32px;
`;

export const ProductDataContainer = styled.div`
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

export const PreviewContainer = styled.div`
  padding: 32px;
  border: 1px solid #191919;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  max-width: 324px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #fefefe;
  }

  button {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 16px;

  label {
    flex: 1;
  }
`;

type TImageContainer = {
  filled: boolean;
};

export const ImageContainer = styled.label<TImageContainer>`
  width: 100%;
  max-width: 260px;
  cursor: pointer;

  aspect-ratio: 1;
  border-radius: 10px;
  background: #0f0f0f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${({ filled }) => (filled ? '0px' : '32px')} 0;

  svg {
    color: #aeaeae;
  }

  overflow: hidden;
  img {
    max-width: 260px;
    aspect-ratio: 1;
    object-fit: cover;
  }

  p {
    color: #fefefe;
    font-size: 11px;
    font-weight: 300;

    display: flex;
    gap: 4px;
    align-items: center;

    span {
      color: #06f08d;
      font-weight: 600;
    }

    svg {
      color: #06f08d;
      margin-right: 4px;
    }
  }

  transition: 300ms;
  &:hover {
    transform: scale(1.007);
  }

  &:active {
    transform: scale(1);
  }

  ${({ filled }) => {
    if (!filled) return;

    return css`
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding: 4px;

      img {
        height: 100%;
        max-width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    `;
  }}

  background-image: repeating-linear-gradient(
      0deg,
      #aeaeae,
      #aeaeae 18px,
      transparent 18px,
      transparent 33px,
      #aeaeae 33px
    ),
    repeating-linear-gradient(
      90deg,
      #aeaeae,
      #aeaeae 18px,
      transparent 18px,
      transparent 33px,
      #aeaeae 33px
    ),
    repeating-linear-gradient(
      180deg,
      #aeaeae,
      #aeaeae 18px,
      transparent 18px,
      transparent 33px,
      #aeaeae 33px
    ),
    repeating-linear-gradient(
      270deg,
      #aeaeae,
      #aeaeae 18px,
      transparent 18px,
      transparent 33px,
      #aeaeae 33px
    );
  background-size:
    3px 100%,
    100% 3px,
    3px 100%,
    100% 3px;
  background-position:
    0 0,
    0 0,
    100% 0,
    0 100%;
  background-repeat: no-repeat;
`;
