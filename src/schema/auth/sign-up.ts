import { z } from 'zod';

export const signupSchema = z.object({
    isIndividual: z.boolean(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    userName: z.string().min(4, "Username must be at least 4 characters")
        .max(20, "Username cannot exceed 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores allowed"),
    organisationName: z.string().optional(),
    emailId: z.email("Enter a valid email address"),
    mobileNo: z
        .string()
        .min(10, "Enter a valid mobile number")
        .regex(/^[0-9]+$/, "Mobile number must contain only digits"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms",
    })
}).superRefine((data, ctx) => {
    if (data.isIndividual) {
        if (!data.firstName || data.firstName.length < 4) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['firstName'],
                message: "Enter a valid first name"
            });
        }
        if (!data.lastName || data.lastName.length < 4) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['lastName'],
                message: "Enter a valid last name"
            });
        }
    } else {
        if (!data.organisationName || data.organisationName.length < 4) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['organisationName'],
                message: "Enter a valid organization name"
            });
        }
    }
});

export const signupDefaultValues = {
    terms: false,
    isIndividual: true,
    firstName: "",
    lastName: "",
    userName: "",
    organisationName: "",
    emailId: "",
    mobileNo: "",
    password: ""
}