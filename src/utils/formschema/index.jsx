import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const ContactFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address")
    .min(1, "Email is required"),
  phone: z
    .string({ message: "Phone number is required" })
    .min(1, "Phone number is required")
    .refine(
      (val) => {
        const parsed = parsePhoneNumberFromString(val, "NP");
        return parsed?.isValid();
      },
      { message: "Invalid phone number" }
    ),
  company: z
    .string({ message: "Company description is required" })
    .min(1, "Company description is required")
    .max(500, "Company description must be less than 500 characters"),
});
