import { ADD_TEXT } from './types';

export function addText(text) {
  return {
    type: ADD_TEXT,
    payload: text
  };
}
