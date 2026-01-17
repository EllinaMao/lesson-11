import { Portal } from '../portal/Portal';
import { PORTAL_LAYERS } from '../portal/PORTAL_LAYERS';
import { Modal } from 'react-bootstrap';


export function ModalWindow({
    //visibility and control
    show,
    onHide,
    title,
    children,
    header = null,
    footer = null,
    portalId = PORTAL_LAYERS.modal,
    ...props
}) {
    return (
        <Portal id={portalId}>
            <Modal
                show={show}
                onHide={onHide}
                {...props}
            >
                {header}
                <Modal.Body>
                    {children}
                </Modal.Body>
                {footer}
            </Modal>
        </Portal>
    );
}