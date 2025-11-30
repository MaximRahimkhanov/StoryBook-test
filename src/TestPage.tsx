import { useState } from 'react';

import css from './TestPage.module.css';
import Input from './components/Input/Input';
import Toast from './components/Toast/Toast';
import SidebarMenu from './components/SideBar/SideBar';

export const TestPage = () => {
  const [showToast, setShowToast] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <div className={css.input}>
      <h2>Testing components from index.ts</h2>
      <Input
        name="text"
        label="Text"
        type="text"
        placeholder="Type text here..."
        clearable
      />
      <Input
        name="number"
        label="Number"
        type="number"
        placeholder="Type number here..."
        clearable
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Type password here..."
        clearable
      />
      <Input
        name="error"
        label="Error"
        type="error"
        placeholder="Type password here..."
        clearable
      />

      {showToast && (
        <Toast
          onClose={handleToastClose}
          message="Hello from Toast"
          duration={2000}
          type="info"
        />
      )}
      <button onClick={() => setIsOpen(true)} className={css.openSidebarBtn}>
        Open Sidebar
      </button>
      <SidebarMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
