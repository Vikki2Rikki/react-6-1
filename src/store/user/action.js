import { CREATE_NEW_NAME, UPDATE_AGE } from './types';

export const createUser = value => ({ type: CREATE_NEW_NAME, payload: value });
export const updateAgeUser = value => ({
  type: UPDATE_AGE,
  payload: value,
});
