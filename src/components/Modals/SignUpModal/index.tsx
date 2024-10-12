import FeatherIcon from 'feather-icons-react';
import ReactLoading from 'react-loading';
import { AxiosError } from 'axios';

import Modal, { TModal } from '../../Modal';
import Input from '../../Input';
import Button from '../../Button';

import logo from '../../../assets/Logo.svg';

import * as S from './styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as techstock from '../../../services/techstock';

type TSignUpModal = TModal & {
  openSignInModal: () => void;
};

type TInputs = {
  name: string;
  password: string;
  passwordConf: string;
};

function SignUpModal({ openSignInModal, ...rest }: TSignUpModal) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<TInputs>();

  function goSignIn() {
    rest.setOpen(false);
    setTimeout(openSignInModal, 300);
  }

  async function onSubmit(inputs: TInputs) {
    if (isLoading) return;

    if (
      !inputs.password.length ||
      !inputs.name.length ||
      !inputs.passwordConf.length
    ) {
      toast('Preencha todos os campos', { type: 'error' });
      return;
    }

    if (inputs.passwordConf !== inputs.password) {
      toast('Confirme sua senha corretamente', { type: 'error' });
      return;
    }

    setIsLoading(true);
    try {
      const user = await techstock.signUp(inputs.name, inputs.password);

      localStorage.setItem('user', JSON.stringify(user));
      location.href = '/stock';
    } catch (e: any) {
      toast(e.response.data.message, { type: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal {...rest}>
      <S.Container>
        <S.Header>
          <img src={logo} />

          <div>
            <h1>Seja bem vindo!</h1>
            <p>Por favor insira seus dados para se cadastrar</p>
          </div>
        </S.Header>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <Input
              label="Nome"
              placeholder="Insira seu nome"
              {...register('name')}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Insira sua senha"
              {...register('password')}
            />
            <Input
              label="Confirmação de senha"
              placeholder="Repita a sua senha"
              type="password"
              {...register('passwordConf')}
            />
          </div>

          <footer>
            <Button type="submit" disabled={isLoading}>
              Criar conta
              {isLoading && (
                <ReactLoading
                  color="#0A0A0A"
                  type="spin"
                  height={15}
                  width={15}
                />
              )}
            </Button>
            <p>
              Já tenho uma conta.{' '}
              <span onClick={goSignIn}>
                Entrar <FeatherIcon icon="log-in" strokeWidth={3} size={14} />
              </span>
            </p>
          </footer>
        </S.Form>
      </S.Container>
    </Modal>
  );
}

export default SignUpModal;
