import { CHECKBOX_SWITCH } from './types';

export function checkboxSwitch(state) {
  return {
    type: CHECKBOX_SWITCH,
    payload: state
  };
}
