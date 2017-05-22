import { ADD_BLOCK } from './types';

export function addBlock(newBlock) {
  return {
    type: ADD_BLOCK,
    payload: newBlock
  };
}
