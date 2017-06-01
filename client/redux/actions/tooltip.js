import { TOOLTIP_STATE } from './types';

export function ttState(ttState) {
  return {
    type: TOOLTIP_STATE,
    payload: ttState
  };
}
