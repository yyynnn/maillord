import { TIME_OF_DAY } from './types';

export function timeOfDay(time) {
  return {
    type: TIME_OF_DAY,
    payload: time
  };
}
