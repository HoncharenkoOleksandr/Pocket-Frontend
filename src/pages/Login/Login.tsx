import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import AuthFrame from '@assets/images/AuthFrame.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { config, useAuthForm } from '@utils';

import { defaultValues, LoginForm, LoginFormSchema, LoginFromModel } from './components';

import styles from '../SignUp/SignUp.module.css';

const LoginTransition = {
  delay: 0.5,
  x: { duration: 1 },
  default: { ease: 'linear' }
};

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
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <div className={styles.form__wrapper}>
          <h1>Login</h1>
          <LoginForm form={form} onSubmit={onSubmit} />
        </div>
        <div className={styles.image__wrapper}>
          <img className={styles.image} src={AuthFrame} alt='LoginImage' />
        </div>
      </motion.div>
    </section>
  );
};
