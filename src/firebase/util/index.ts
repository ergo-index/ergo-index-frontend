export { useLoadingValue } from './useLoadingValue';
export * from './useCancellablePromise';

export type LoadingHook<T, E> = [T | undefined, boolean, E | undefined];
