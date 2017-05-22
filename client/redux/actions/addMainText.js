import { ADD_TEXT } from './types';

export function addMainText(mainText) {
  return {
    type: ADD_TEXT,
    payload: mainText
  };
}
