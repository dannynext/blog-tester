import { kebabCase } from 'lodash'
export const getAuthorLink = string =>
  `/author/${kebabCase(string)}`
