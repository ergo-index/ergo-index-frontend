import { useState, useMemo } from 'react';
import { CreateUserOptions, EmailAndPasswordActionHook } from './types';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  sendEmailVerification,
  AuthError
} from 'firebase/auth';
import { useCancellablePromise } from '../util';

export const useCreateUserWithEmailAndPassword = (
  auth: Auth,
  options?: CreateUserOptions
): EmailAndPasswordActionHook => {
  const [error, setError] = useState<AuthError>();
  const [
    registeredUser,
    setRegisteredUser,
  ] = useState<UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);
  const { cancellablePromise: cancellablePromiseSignUp } = useCancellablePromise<UserCredential>();
  const { cancellablePromise: cancellablePromiseVerification } = useCancellablePromise<void>();

  const createUserWithEmailAndPassword = (
    email: string,
    password: string
  ) => {
    setLoading(true);
    cancellablePromiseSignUp(_createUserWithEmailAndPassword(auth, email, password))
        .then((user) => {
          if (options && options.sendEmailVerification && user.user) {
            cancellablePromiseVerification(sendEmailVerification(user.user, options.emailVerificationOptions))
                .then(() => {
                  setRegisteredUser(user);
                  setLoading(false);
                }).catch((error) => {
                  setError(error);
                  setLoading(false);
            })
          } else {
            setRegisteredUser(user);
            setLoading(false);
          }
        }).catch((error) => {
          setError(error);
          setLoading(false);
        });
  };

  const resArray: EmailAndPasswordActionHook = [
    createUserWithEmailAndPassword,
    registeredUser,
    loading,
    error,
  ];
  return useMemo<EmailAndPasswordActionHook>(() => resArray, resArray);
};
