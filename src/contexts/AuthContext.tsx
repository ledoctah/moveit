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
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    FirebaseService.auth().onAuthStateChanged(response => {
      if (response) {
        setUser({
          name: response.displayName || 'Move.it',
          avatar_url: response.photoURL || '',
          email: response.email || '',
        });

        setIsLogged(true);
      } else {
        setUser({} as IUser);
        setIsLogged(false);
      }
    });
  }, []);

  function loginWithGithub(): void {
    const provider = new FirebaseService.auth.GithubAuthProvider();

    FirebaseService.auth()
      .signInWithRedirect(provider)
      .then(() => {
        router.push('/');
      });
  }

  function loginWithGoogle(): void {
    setIsLogged(true);
  }

  function logOut(): void {
    setIsLogged(false);
    setUser({} as IUser);
  }

  return (
    <AuthContext.Provider
      value={{ isLogged, user, loginWithGithub, loginWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
