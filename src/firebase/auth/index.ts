import { User } from 'firebase/auth';

export { useAuthState } from './useAuthState';
export type { AuthStateHook } from './useAuthState';
export { default as useSignInWithEmailAndPassword } from './useSignInWithEmailAndPassword';
export { default as useCreateUserWithEmailAndPassword } from './useCreateUserWithEmailAndPassword';

export type { EmailAndPasswordActionHook } from './types';
export type AuthHeader = { headers: { Authorization: string, 'Content-Type': string } };

/**
 * Fetches the user's JWT and returns an Authorization header that contains it.
 * Refreshes the JWT if it expired or will expire within 5 minutes.
 */
export const getAuthHeader = async (user: User): Promise<AuthHeader> => {
  const jwt = user && (await user.getIdToken());
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
};
