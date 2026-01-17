
import { Modal } from 'react-bootstrap';

export const ModalFooter = ({ children, ...props }) => {
    return <>
        <Modal.Footer {...props}>
            {children}
        </Modal.Footer>
    </>
};