import classnames from 'classnames';
import React from 'react';

import styles from './Input.module.css';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  error?: string;
  isLoading?: boolean;
  label: string;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, id, placeholder, error, ...props }, inputRef) => (
    <div className={styles.input__wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={classnames(styles.input, { [styles.input_error]: !!error })}
        id={id}
        placeholder={placeholder}
        {...props}
        ref={inputRef}
      />
      <span className={styles.error}>{error}</span>
    </div>
  )
);
