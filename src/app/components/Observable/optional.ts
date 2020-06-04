export type Optional<TValue = unknown, TError = unknown> =
  | Pending
  | Fulfilled<TValue>
  | Rejected<TError>;

export type Pending = { state: 'pending' };
export const pending: Pending = { state: 'pending' };
export const isPending = (value: Optional): value is Pending =>
  value.state === 'pending';

export type Fulfilled<T> = { state: 'fulfilled'; value: T };
export const fulfilled = <T>(value: T): Fulfilled<T> => ({
  state: 'fulfilled',
  value,
});
export const isFulfilled = <T>(value: Optional<T>): value is Fulfilled<T> =>
  value.state === 'fulfilled' &&
  Object.prototype.hasOwnProperty.call(value, 'value');

export type Rejected<T> = { state: 'rejected'; error: T };
export const rejected = <T>(error: T): Rejected<T> => ({
  state: 'rejected',
  error,
});
export const isRejected = <T>(
  value: Optional<unknown, T>,
): value is Rejected<T> =>
  value.state === 'rejected' &&
  Object.prototype.hasOwnProperty.call(value, 'error');
