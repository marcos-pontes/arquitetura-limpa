
import z from "zod"

export interface DeleteNewsInputDTO{
    id:string;
}
export const DeleteNewsSchema = z.object({
    id:z.string().min(2).startsWith("n")
}).transform(data=>data as DeleteNewsInputDTO)