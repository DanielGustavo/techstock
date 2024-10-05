import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Modal as ModalLib } from 'react-responsive-modal';

export type TModal = PropsWithChildren & {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function Modal({ children, open, setOpen }: TModal) {
  const close = () => setOpen(false);

  return (
    <ModalLib
      open={open}
      onClose={close}
      closeOnEsc
      closeOnOverlayClick
      showCloseIcon={false}
      styles={{
        modal: {
          padding: '32px 100px',
          background: '#191919',
          borderRadius: '10px',
          maxHeight: '98vh',
        },
        modalContainer: {
          background: 'rgba(10,10,10,0.8)',
        },
      }}
      center
      blockScroll
    >
      {children}
    </ModalLib>
  );
}

export default Modal;
