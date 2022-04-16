/**
 * Generates the message to be returned to the user
 *
 * @param phoneNumber
 * @returns string
 */
export const generateMessage = (phoneNumber: number) => {
  const shortlink = `https://wa.me/${phoneNumber}`;
  return `[Click to message ${phoneNumber}](${shortlink})`;
};
