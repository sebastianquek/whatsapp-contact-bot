/**
 * Parses a text to return a number.
 * Accepts "+" and numbers only.
 *
 * @param text
 * @returns parsed number
 */
export const parseMobileNumber = (text: string): number | undefined => {
  if (text.replace(/\s/g, "").match(/^\+?[0-9]+$/)) {
    return Number(text.replace(/[+\s]/g, ""));
  }
  return undefined;
};
