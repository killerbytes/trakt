import { lowerCase, startCase } from 'lodash';

export const titleize = (string) => {
  return startCase(lowerCase(string));
};
