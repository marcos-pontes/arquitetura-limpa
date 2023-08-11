import { AuthorDB } from "../models/Author";
import { BaseDatabase } from "./BaseDatabase";

export class AuthorDatabase extends BaseDatabase {
    private static NEWS_TABLE = "authors"
    public getAllAuthor = async ():Promise<AuthorDB[]>=>{
       const result =  await BaseDatabase.connection(AuthorDatabase.NEWS_TABLE)
       return result;
    }
}