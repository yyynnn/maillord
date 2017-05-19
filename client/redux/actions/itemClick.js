import { ITEM_CLICK } from './types';

export function itemClick(color) {
  return {
    type: ITEM_CLICK,
    payload: color
  };
}
