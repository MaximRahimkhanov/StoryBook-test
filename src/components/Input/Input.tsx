import React, { useState } from 'react';
import css from './Input.module.css';
import { Eye, EyeOff, X } from 'lucide-react';

interface InputProps {
  name: string;
  type?: 'text' | 'password' | 'number' | 'error';
  label: string;
  placeholder?: string;
  error?: string;
  clearable?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  clearable,
  error,
}) => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClear = () => setValue('');

  const togglePassword = () => setVisible((prev) => !prev);

  return (
    <div className={css.wrapper}>
      <div className={css.labelRow}>
        <label className={css.label}>{label}</label>

        {clearable && value && (
          <button
            type="button"
            onClick={handleClear}
            className={css.iconButton}
          >
            <X className={css.iconCross} />
          </button>
        )}
        {error && !value && <span className={css.errorText}>{error}</span>}
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePassword}
            className={css.iconButton}
          >
            {visible ? (
              <EyeOff className={css.icon} />
            ) : (
              <Eye className={css.icon} />
            )}
          </button>
        )}
      </div>
      <input
        type={type === 'password' && visible ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${css.input} ${error ? css.inputError : ''}`}
      />
    </div>
  );
};

export default Input;
