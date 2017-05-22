import { REMOVE_BLOCK } from './types';

export function removeBlock(block) {
  return {
    type: REMOVE_BLOCK,
    payload: block
  };
}
