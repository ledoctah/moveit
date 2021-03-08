/* eslint-disable no-alert */
import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import FirebaseService from '../services/FirebaseService';

interface IUser {
  name: string;
  email: string;
  avatar_url: string;
}

interface IAuthContextData {
  isLogged: boolean;
  isLogging: boolean;
  user: IUser;
  loginWithGithub: () => void;
  loginWithGoogle: () => void;
  logOut: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    setIsLogging(true);

    FirebaseService.auth().onAuthStateChanged(response => {
      setIsLogging(true);

      if (response) {
        setUser({
          name: response.displayName || 'Move.it',
          avatar_url: response.photoURL || '',
          email: response.email || '',
        });

        setIsLogged(true);
        setIsLogging(false);
      } else {
        setIsLogging(false);
        setUser({} as IUser);
        setIsLogged(false);
      }
    });
  }, []);

  function loginWithGithub(): void {
    const provider = new FirebaseService.auth.GithubAuthProvider();

    FirebaseService.auth()
      .signInWithPopup(provider)
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        if (err.code === 'auth/account-exists-with-different-credential') {
          alert('Você já está logado nesse email através do Google.');
        } else {
          alert('Ocorreu um erro ao efetuar a autenticação');
        }
      });
  }

  function loginWithGoogle(): void {
    const provider = new FirebaseService.auth.GoogleAuthProvider();

    FirebaseService.auth()
      .signInWithPopup(provider)
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        if (err.code === 'auth/account-exists-with-different-credential') {
          alert('Você já está logado nesse email através do Github.');
        } else {
          alert('Ocorreu um erro ao efetuar a autenticação');
        }
      });
  }

  function logOut(): void {
    setIsLogged(false);
    setUser({} as IUser);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        isLogging,
        user,
        loginWithGithub,
        loginWithGoogle,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
