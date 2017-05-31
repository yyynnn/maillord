import { REQUEST_DATA } from './types';

export function reqData(reqState) {
  return {
    type: REQUEST_DATA,
    payload: reqState
  };
}
