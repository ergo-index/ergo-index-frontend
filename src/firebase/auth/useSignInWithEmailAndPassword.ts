import { useState, useMemo } from 'react';
import {
  Auth,
  UserCredential,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  AuthError,
} from 'firebase/auth';
import { EmailAndPasswordActionHook } from './types';
import { useCancellablePromise } from '../util';

const useSignInWithEmailAndPassword = (auth: Auth): EmailAndPasswordActionHook => {
  const [error, setError] = useState<AuthError>();
  const [
    loggedInUser,
    setLoggedInUser,
  ] = useState<UserCredential>();
  const [loading, setLoading] = useState(false);
  const { cancellablePromise } = useCancellablePromise<UserCredential>();

  const signInWithEmailAndPassword = (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    cancellablePromise(_signInWithEmailAndPassword(auth, email, password))
      .then((user) => {
        setLoggedInUser(user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const resArray: EmailAndPasswordActionHook = [
    signInWithEmailAndPassword,
    loggedInUser,
    loading,
    error,
  ];
  return useMemo<EmailAndPasswordActionHook>(() => resArray, [resArray]);
};

export default useSignInWithEmailAndPassword;
