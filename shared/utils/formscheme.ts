import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(5, "Password should contain at least 5 characters"),
});
