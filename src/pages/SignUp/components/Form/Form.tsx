import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@common';
import { Input } from '@common/Input';

import styles from './Form.module.css';

export interface SignUpFromModel {
  username: string;
  name: string;
  password: string;
}

export const SignUpFormSchema = yup.object().shape({
  username: yup.string().min(5).required(),
  name: yup.string().min(5).required(),
  password: yup.string().min(8).required()
});

export const defaultValues = {
  username: '',
  name: '',
  password: ''
};

export interface SignUpFormProps {
  form: UseFormReturn<SignUpFromModel>;
  onSubmit: (data: SignUpFromModel) => any;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ form, onSubmit }) => {
  const { formState, register, handleSubmit } = form;
  const { errors, isSubmitting } = formState;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <Input
          type='text'
          label='Name'
          placeholder='Enter name'
          {...register('name')}
          error={errors?.name?.message}
        />
      </div>
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
        Submit
      </Button>
    </form>
  );
};
