import { InputHTMLAttributes } from 'react';

import * as S from './styles';

type TInput = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

function Input({ label, ...rest }: TInput) {
  return (
    <S.Container>
      <span>{label}</span>
      <S.InputElement {...rest} />
    </S.Container>
  );
}

export default Input;
