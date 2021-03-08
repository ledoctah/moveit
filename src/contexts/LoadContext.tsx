import React, { createContext, ReactNode, useState } from 'react';

interface ILoadingContext {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

interface ILoadProviderProps {
  children: ReactNode;
}

export const LoadContext = createContext({} as ILoadingContext);

export function LoadProvider({ children }: ILoadProviderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  function showLoading(): void {
    setIsLoading(true);
  }

  function hideLoading(): void {
    setIsLoading(false);
  }

  return (
    <LoadContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadContext.Provider>
  );
}
