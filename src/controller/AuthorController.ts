import { Response, Request } from "express"
import { AuthorBusiness } from "../Business/AuthorBusiness"

export class AuthorControler{
    constructor(
        private authorBusiness : AuthorBusiness
    ){}
        public getAuthor = async (req: Request, res: Response):Promise<void> => {
try {
    const result = await this.authorBusiness.getAllAuthor()
    res.status(200).send(result)
} catch (error) {
    res.status(400).send(error)
}
        }
    
    
}