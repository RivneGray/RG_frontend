import { Modal } from "../ModalRoot/Modal"

export const LoginModal = ({isOpenLoginModal, closeLoginModalHandler}) => {
    return (
        <Modal isOpen={isOpenLoginModal} closeHandler={closeLoginModalHandler}>
            modalochka
        </Modal>
    )
}