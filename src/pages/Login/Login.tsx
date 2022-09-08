import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import AuthFrame from '@assets/images/AuthFrame.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthForm } from '@utils/api';
import { config } from '@utils/constants';

import { defaultValues, LoginForm, LoginFormSchema, LoginFromModel } from './components';

import styles from '../SignUp/SignUp.module.css';

export const Login = () => {
  const form = useForm<LoginFromModel>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(LoginFormSchema)
  });
  const navigate = useNavigate();
  const { mutateAsync, error } = useAuthForm('login', {
    config
  });
  const onSubmit = React.useCallback(async (data: LoginFromModel) => {
    await mutateAsync(data, {
      onSuccess: async ({ data }) => {
        localStorage.setItem('token', data?.token);
        navigate('/');
      }
    });
  }, []);

  return (
    <section className={styles.container}>
      <span className={styles.logo}>Pocket</span>
      <div className={styles.content}>
        <div className={styles.form__wrapper}>
          <h1>Login</h1>
          <LoginForm form={form} onSubmit={onSubmit} />
        </div>
        <div className={styles.image__wrapper}>
          <img className={styles.image} src={AuthFrame} alt='LoginImage' />
        </div>
      </div>
    </section>
  );
};
