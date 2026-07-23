import z from "zod";

export const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});





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


