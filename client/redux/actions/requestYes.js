import { REQUEST_DATA_YES } from './types';

export function reqDataYes(reqState) {
  return {
    type: REQUEST_DATA_YES,
    payload: reqState
  };
}
