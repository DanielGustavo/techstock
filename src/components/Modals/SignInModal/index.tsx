import FeatherIcon from 'feather-icons-react';

import Modal, { TModal } from '../../Modal';
import Input from '../../Input';
import Button from '../../Button';

import logo from '../../../assets/Logo.svg';

import * as S from './styles';

type TSignInModal = TModal & {
  openSignUpModal: () => void;
};

function SignInModal({ openSignUpModal, ...rest }: TSignInModal) {
  function goSignIn() {
    rest.setOpen(false);
    setTimeout(openSignUpModal, 300);
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

        <S.Form>
          <div className="inputs">
            <Input label="Nome" placeholder="Insira seu nome" />
            <Input label="Senha" type="password" placeholder="Insira sua senha" />
          </div>

          <footer>
            <Button type="button">Entrar</Button>
            <p>
              Ainda não tem uma conta?{' '}
              <span onClick={goSignIn}>
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
