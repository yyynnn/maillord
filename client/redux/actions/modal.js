import { MODAL_STATE } from './types';

export function modalState(modalState) {
  return {
    type: MODAL_STATE,
    payload: modalState
  };
}
