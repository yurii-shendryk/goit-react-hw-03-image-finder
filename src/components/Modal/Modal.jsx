import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.defaultProps = {
  onClose: () => null,
  children: [],
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
