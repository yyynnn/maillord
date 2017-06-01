import { MODAL_FIRST_TIME } from './types';

export function modalFirstTime(modalState) {
  return {
    type: MODAL_FIRST_TIME,
    payload: modalState
  };
}
