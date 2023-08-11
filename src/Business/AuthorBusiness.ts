import { AuthorDB } from './../models/Author';
import { AuthorDatabase } from "../BaseDatabase/AuthorDatabase"


export class AuthorBusiness{
    constructor(
        private authorDataBase: AuthorDatabase
    ){}
    public getAllAuthor = async ():Promise<AuthorDB[]> =>{
        const authorData :AuthorDB[] = await this.authorDataBase.getAllAuthor();
        return authorData
    }
}