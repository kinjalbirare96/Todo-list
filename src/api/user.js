import { get } from './client';

export const getUserDetails = () => {
  return get('/users');
};
