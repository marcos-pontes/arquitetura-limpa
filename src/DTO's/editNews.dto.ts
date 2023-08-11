import z from "zod"

export interface EditNewsInputDTO{
    id: string,
    title?: string,
    description?: string
}
export const EditNewsSchema = z.object({
    id:z.string().min(2).startsWith("n"),
    description: z.string().min(4).optional(),
    title: z.string().min(3).optional(),
    
}).transform(data => data as EditNewsInputDTO)