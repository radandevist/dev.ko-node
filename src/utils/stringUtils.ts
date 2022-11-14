/**
 * Removes the ending 's' character of a string if there is.
 *
 * @param str - The string to transform into singular.
 * @returns The string with ending 's' removed.
 *
 * @example
 * toSingular("users") // username
 * // does no support language processing yet
 * toSingular("berries") // berrie
 * toSingular("nonsense") // nonsense
 * // if the argument ends with nultiple 's' only the later will be removed
 * toSingular("susss") // suss
 */
export function toSingular(str: string) {
  return str.replace(/s$/, "");
}

/**
 * Capitalizes a given string.
 *
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}