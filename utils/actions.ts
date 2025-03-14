"use server";

import { profileShcema } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileShcema.parse(rawData);
    console.log(validatedFields);

    return { message: "Profile created" };
  } catch (error) {
    console.log(error);
    return { message: "There was an error" };
  }
};
