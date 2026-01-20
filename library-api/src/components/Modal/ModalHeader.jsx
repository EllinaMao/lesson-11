import { Modal } from "react-bootstrap";

export const ModalHeader = ({ children, ...props }) => {
    return <>
        <Modal.Header {...props}>
            {children}
        </Modal.Header>
    </>
}
