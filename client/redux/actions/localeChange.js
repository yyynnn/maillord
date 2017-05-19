import { LOCALE_CHANGE } from "./types";

export function localeChange(locale) {
  return {
    type: LOCALE_CHANGE,
    payload: locale
  };
}
