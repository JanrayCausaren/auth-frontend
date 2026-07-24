import z from "zod";

export const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});


export const registerInputSchema = z.object({
  username: z.string().max(30).min(10),
  email: z.email(),
  password: z.string().min(10),
});


export type IRegister = z.infer<typeof registerInputSchema>




export type InputLoginType = z.infer<typeof formSchema>

export type User = {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    isEmailVerified: boolean;
    emailVerifiedAt: Date | null;
    updatedAt: Date;
    deletedAt: Date | null;
}


