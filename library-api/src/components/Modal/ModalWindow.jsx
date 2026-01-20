import { Portal } from '../portals/Portal';
import { PORTAL_LAYERS } from '../portals/PORTAL_LAYERS.js';
import { Modal } from 'react-bootstrap';


export function ModalWindow({
    //visibility and control
    show,
    onHide,
    title,
    children,
    header = null,
    footer = null,
    portalId = PORTAL_LAYERS.MODAL,
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