import { useEffect, useRef } from 'react';

export function useCancellablePromise<T>() {
  const promises = useRef<CancellablePromise<T>[]>([]);
  useEffect(
      () => {
        promises.current = promises.current || [];
        return function cancel() {
          promises.current.forEach(p => p.cancel());
          promises.current = [];
        };
      }, []
  );

  function cancellablePromise(p: Promise<T>) {
    const cPromise = makeCancellable(p);
    promises.current.push(cPromise);
    return cPromise.promise;
  }
  return { cancellablePromise };
}

export type CancellablePromise<T> = {
  promise: Promise<T>,
  cancel: Function,
};

export function makeCancellable<T>(promise: Promise<T>): CancellablePromise<T> {
  let isCanceled = false;
  const wrappedPromise: Promise<T> =
      new Promise((resolve, reject) => {
        // Ignore resolve and reject if canceled
        promise
            .then((val) => (!isCanceled && resolve(val)))
            .catch((error) => (!isCanceled && reject(error)));
      });
  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
}
