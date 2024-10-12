import FeatherIcon from 'feather-icons-react';
import ReactLoading from 'react-loading';

import Modal, { TModal } from '../../Modal';
import Input from '../../Input';
import Button from '../../Button';

import logo from '../../../assets/Logo.svg';

import * as S from './styles';
import { useForm } from 'react-hook-form';
import * as techstock from '../../../services/techstock';
import { useState } from 'react';
import { toast } from 'react-toastify';

type TSignInModal = TModal & {
  openSignUpModal: () => void;
};

type TInputs = {
  name: string;
  password: string;
};

function SignInModal({ openSignUpModal, ...rest }: TSignInModal) {
  const { register, handleSubmit } = useForm<TInputs>();
  const [isLoading, setIsLoading] = useState(false);

  function goSignUp() {
    rest.setOpen(false);
    setTimeout(openSignUpModal, 300);
  }

  async function onSubmit(inputs: TInputs) {
    if (isLoading) return;

    if (!inputs.name.length || !inputs.password.length) {
      toast('Preencha todos os campos', { type: 'error' });
      return;
    }

    try {
      setIsLoading(true);
      const user = await techstock.login(inputs.name, inputs.password);

      localStorage.setItem('user', JSON.stringify(user));
      location.href = '/stock';
    } catch {
      toast('Usuário ou senha errados', { type: 'error' });
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
            <p>Por favor insira seus dados para entrar</p>
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
          </div>

          <footer>
            <Button type="submit" disabled={isLoading}>
              Entrar{' '}
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
              Ainda não tem uma conta?{' '}
              <span onClick={goSignUp}>
                Criar conta{' '}
                <FeatherIcon icon="user-plus" strokeWidth={3} size={14} />
              </span>
            </p>
          </footer>
        </S.Form>
      </S.Container>
    </Modal>
  );
}

export default SignInModal;
