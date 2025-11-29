import React, { useEffect } from 'react';
import css from './SideBar.module.css';
import { Link } from 'react-router-dom';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && <div onClick={onClose} className={css.backdrop} />}

      <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
        <h3>Menu</h3>
        <ul className={css.menuList}>
          <li>
            <Link className={css.link} to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <Link className={css.link} to="/" onClick={onClose}>
              Profile
            </Link>
          </li>
          <li>
            <Link className={css.link} to="/" onClick={onClose}>
              Settings
            </Link>
          </li>
        </ul>

        <button onClick={onClose} type="button" className={css.closeBtn}>
          Close
        </button>
      </div>
    </>
  );
};

export default SidebarMenu;
