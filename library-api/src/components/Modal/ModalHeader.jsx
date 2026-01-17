import { Modal } from "react-bootstrap";

export const ModalHeader = ({ title, children, ...props }) => {
    return <>
        <Modal.Header {...props}>
            <Modal.Title title></Modal.Title>
            {children}
        </Modal.Header>
    </>
}
