import React, { useEffect } from 'react';
import css from './Toast.module.css';

export interface ToastProps {
  message?: string;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  type = 'info',
  duration,
}) => {
  const messages = {
    success: 'Action completed successfully!',
    error: 'Something went wrong....',
    info: 'Here is some information.',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const displayMessage = message || messages[type];

  return (
    <div className={`${css.toast} ${css[type]} `}>
      {displayMessage}
      <button onClick={onClose} className={css.closeBtn}>
        ✖️
      </button>
    </div>
  );
};

export default Toast;
