
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ isActive, children, closeModal }) {
  
   useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isActive) {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal_active')) {
        closeModal();
      }
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyPress);
      document.addEventListener('click', handleClickOutside);
    }


    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
   }, [isActive, closeModal]);
  return <div className={isActive ? 'modal_active' : 'modal_hidden'}>{children}</div>;
}
Modal.propTypes = {
  isActive: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element
};

export default Modal;