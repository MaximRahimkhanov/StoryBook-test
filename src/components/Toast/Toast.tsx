// import React, { useEffect } from 'react';

// export interface ToastProps {
//   message: string;
//   duration?: number;
//   onClose: () => void;
//   type?: 'success' | 'error' | 'info';
// }

// const Toast: React.FC<ToastProps> = ({
//   message,
//   duration = 3000,
//   onClose,
//   type = 'info',
// }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, duration);
//     return () => clearTimeout(timer);
//   }, [duration, onClose]);

//   const displayMessage =
//     message ||
//     {
//       success: 'Action completed successfully!',
//       error: 'Something went wrong.',
//       info: 'Here is some information.',
//     }[type];

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         padding: '10px 20px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         backgroundColor: 'white',
//         boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//       }}
//     >
//       {displayMessage}
//       <button onClick={onClose} style={{ marginLeft: '10px' }}>
//         ✖️
//       </button>
//     </div>
//   );
// };

// export default Toast;
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
