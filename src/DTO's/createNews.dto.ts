import z from "zod";

export interface CreateNewsInputDTO {
  title: string;
  description: string;
  author: string;
}
export interface CreateNewsOutputDTO {
  message: string;
  news: {
    title: string;
    description: string;
    author: string;
  };
}
export const CreateNewsSchema = z.object({
    description: z.string().min(4),
    title: z.string().min(3),
    author: z.string().min(3).startsWith("a")
}).transform(data => data as CreateNewsInputDTO)