import * as z from "zod";

export const CompanyRegistrationformSchema = z.object({
  ownername: z
    .string({ required_error: "Owner name is required" })
    .nonempty({ message: "Owner name is required" }),
  companyname: z.string().nonempty({ message: "company name is required" }),
  contactnumber: z
    .string()
    .min(10, { message: "Invalid Contact number" })
    .max(12, { message: "Invalid Contact number" })
    .nonempty({ message: "Contact number is required" }),
  email: z.string().email().nonempty({ message: "Email is required" }),
  streetaddress: z.string().nonempty({ message: "Street Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  state: z.string().nonempty({ message: "state is required" }),
  zipcode: z
    .string({ required_error: "zip code is required" })
    .max(8)
    .nonempty({ message: "Zip code is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  website: z.string().url().nonempty({ message: "Web site is required" }),
});

export const UserLoginformSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "password is required" }),
});

export const UserSingupformSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
  name: z.string().nonempty({ message: "Name is required" }),
  companyname: z.string().nonempty({message: "Company Name is required"}),
  password: z.string().nonempty({ message: "password is required" }),
  website: z.string().url().nonempty({ message: "Website is required" }),
  contactnumber: z
  .string()
  .min(10, { message: "Invalid Contact number" })
  .max(12, { message: "Invalid Contact number" })
  .nonempty({ message: "Contact number is required" }),
  isCheck: z.boolean({ coerce: true, invalid_type_error: 'Accept privacy policy' }).refine((arg) => arg ===  true,{
    message: 'Accept privacy policy'
  })
});

export const UserResetPassword1formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
});

export const UserResetPassword2formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
  verificationkey: z.string().nonempty({message: "Company Name is required"}),
  password: z.string().nonempty({ message: "password is required" }),
});


export const UserRegiterformSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
  password: z.string().nonempty({ message: "password is required" }),
  roleid: z
    .string({ required_error: " Role id is required" })
    .nonempty({ message: "Role is required" }),
});

export const UserUpdatedformSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email()
    .nonempty({ message: "Email is required" }),
  roleid: z
    .string({ required_error: " Role id is required" })
    .nonempty({ message: "Role is required" }),
});

export const CompanyRoleformSchema = z.object({
  name: z.string().nonempty(),
  status: z.enum(["2", "1"], {
    required_error: "status is required",
  }),
});
