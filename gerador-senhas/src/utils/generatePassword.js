export const CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
  }
  return password;
}
