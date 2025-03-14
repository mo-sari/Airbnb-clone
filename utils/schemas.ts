import * as z from "zod";
import { ZodSchema } from "zod";

export const profileShcema = z.object({
  //   firstName: z
  //     .string()
  //     .max(5, { message: "max length is 5" })
  //     .min(1, { message: "name can not be empty" }),
  firstName: z.string().min(2).max(5, { message: "too many characters" }),
  lastName: z.string().min(2),
  username: z.string().min(2),
});
