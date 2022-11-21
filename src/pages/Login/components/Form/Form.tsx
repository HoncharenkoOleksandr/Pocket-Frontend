import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@common';
import { Input } from '@common/Input';

import styles from './Form.module.css';

export interface LoginFromModel {
  username: string;
  password: string;
}

export const LoginFormSchema = yup.object().shape({
  username: yup.string().min(5).required(),
  password: yup.string().min(8).required()
});

export const defaultValues = {
  username: '',
  password: ''
};

export interface LoginFormProps {
  form: UseFormReturn<LoginFromModel>;
  onSubmit: (data: LoginFromModel) => any;
}

export const LoginForm: React.FC<LoginFormProps> = ({ form, onSubmit }) => {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <Input
          type='text'
          label='Username'
          placeholder='Enter username'
          {...register('username')}
          error={errors?.username?.message}
        />
      </div>
      <div>
        <Input
          type='password'
          label='Password'
          placeholder='Enter password'
          {...register('password')}
          error={errors?.password?.message}
        />
      </div>
      <Button disabled={isSubmitting} type='submit'>
        Login
      </Button>
    </form>
  );
};
