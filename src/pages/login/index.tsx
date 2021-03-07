import Head from 'next/head';
import React, { useContext } from 'react';

import style from '../../styles/pages/Login.module.css';

import Logo from '../../../public/logo.svg';
import LogoFull from '../../../public/logo-full.svg';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login(): JSX.Element {
  const { loginWithGithub } = useContext(AuthContext);

  function loginGithub(): void {
    loginWithGithub();
  }

  return (
    <div className={style.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <section>
        <Logo />
      </section>

      <section className={style.loginContainer}>
        <div>
          <LogoFull />

          <h1>Bem-vindo</h1>

          <p>Faça seu login com:</p>

          <div className={style.loginOptions}>
            <button
              type="button"
              className={style.loginOption}
              onClick={loginGithub}
            >
              <span>Logar com Github</span>
              <img src="/icons/github.svg" alt="Github Logo" />
            </button>

            {/* <div className={style.loginOption}>
              <span>Logar com Google</span>
              <img src="/icons/google.svg" alt="Google Logo" />
  </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
