import bcrypt from "bcrypt";

export const comparePassword = async (
  enteredPassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(enteredPassword, userPassword);
};
