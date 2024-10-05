import FeatherIcon from 'feather-icons-react';

import Modal, { TModal } from '../../Modal';
import Input from '../../Input';
import Button from '../../Button';

import logo from '../../../assets/Logo.svg';

import * as S from './styles';

type TSignUpModal = TModal & {
  openSignInModal: () => void;
};

function SignUpModal({ openSignInModal, ...rest }: TSignUpModal) {
  function goSignIn() {
    rest.setOpen(false);
    setTimeout(openSignInModal, 300);
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

        <S.Form>
          <div className="inputs">
            <Input label="Nome" placeholder="Insira seu nome" />
            <Input label="Senha" placeholder="Insira sua senha" />
            <Input
              label="Confirmação de senha"
              placeholder="Repita a sua senha"
            />
          </div>

          <footer>
            <Button type="button">Criar conta</Button>
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
