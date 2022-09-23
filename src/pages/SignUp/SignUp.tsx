import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import AuthFrame from '@assets/images/AuthFrame.svg';
import { Divider } from '@common';
import { yupResolver } from '@hookform/resolvers/yup';
import { config, useAuthForm } from '@utils';

import { defaultValues, SignUpForm, SignUpFormSchema, SignUpFromModel } from './components';

import styles from './SignUp.module.css';

export const SignUp: React.FC = () => {
  const form = useForm<SignUpFromModel>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(SignUpFormSchema)
  });
  const navigate = useNavigate();
  const { mutateAsync, isLoading, isError, error } = useAuthForm('signup', {
    config
  });
  const onSubmit = React.useCallback(async (data: SignUpFromModel) => {
    await mutateAsync(data, {
      onSuccess: async (data) => {
        console.log(data);
        navigate('../login');
      }
    });
  }, []);

  return (
    <section className={styles.container}>
      <span className={styles.logo}>Pocket</span>
      <div className={styles.content}>
        <div className={styles.form__wrapper}>
          <h1>Create a account</h1>
          <SignUpForm form={form} onSubmit={onSubmit} />
          {/* @ts-ignore */}
          {isError && <span className={styles.error}>{error.message}</span>}
          <Divider title='or' />
          <Link to='/login'>Login</Link>
        </div>
        <div className={styles.image__wrapper}>
          <img className={styles.image} src={AuthFrame} alt='SignUpImage' />
        </div>
      </div>
    </section>
  );
};
