import type { ReactNode } from "react";

type ModalProps = {
    children: ReactNode;
    onClose: string;
}
const Modal = ({onClose, children} : ModalProps) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-main-wrap">
                <div className="modal-heading">
                    {onClose && (
                        <div 
                            className="modal-close"
                            onClick={onClose}
                        >
                            x
                        </div>
                    )}
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal