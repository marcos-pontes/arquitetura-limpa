import { DeleteNewsInputDTO } from "../DTO's/deleteNews.dto";
import { NewsDB } from "../models/News";
import { BaseDatabase } from "./BaseDatabase";

export class NewsDatabase extends BaseDatabase {
    private static NEWS_TABLE = "news"
    public getAllNews = async ():Promise<NewsDB[]>=>{
       const result =  await BaseDatabase.connection(NewsDatabase.NEWS_TABLE)
       return result;
    }
    public createNews = async (input:NewsDB):Promise<void>=>{
       await BaseDatabase.connection(NewsDatabase.NEWS_TABLE).insert(input)
    }
    
    public updateNews = async (input:NewsDB):Promise<void>=>{
        await BaseDatabase.connection(NewsDatabase.NEWS_TABLE).update(input).where({id:input.id})
    }

    public deleteNewsDB = async (input:DeleteNewsInputDTO):Promise<void>=>{
        await BaseDatabase.connection(NewsDatabase.NEWS_TABLE).del().where({id:input.id})
    }
}