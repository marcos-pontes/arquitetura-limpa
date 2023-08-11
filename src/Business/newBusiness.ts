import { AuthorDatabase } from "../BaseDatabase/AuthorDatabase";
import { NewsDatabase } from "../BaseDatabase/NewsDatabase";
import { CreateNewsInputDTO } from "../DTO's/createNews.dto";
import { DeleteNewsInputDTO } from "../DTO's/deleteNews.dto";
import { EditNewsInputDTO } from "../DTO's/editNews.dto";
import { AuthorDB } from "../models/Author";
import { News, NewsDB } from "../models/News";

export class NewsBusiness {
  constructor(private newsDataBase: NewsDatabase) {}
  public getAllNews = async (): Promise<NewsDB[]> => {
    const newsData: NewsDB[] = await this.newsDataBase.getAllNews();
    return newsData;
  };
  public create = async (input: CreateNewsInputDTO) => {
    const { title, description, author } = input;
    const authorDatabase = new AuthorDatabase();
    const authors: AuthorDB[] = await authorDatabase.getAllAuthor();
    const authorExists = authors.find((elemento) => elemento.id === author);
    if (!authorExists) {
      throw new Error("id author not found");
    }
    const id: string = "n" + Math.floor(Math.random() * 256).toString();
    const today = new Date().toISOString();
    const output = new News(id, title, description, today, author);
    await this.newsDataBase.createNews(output.toDBModel());
  };

  public edit = async (input: EditNewsInputDTO) => {
    const { id, title, description } = input;
    const newId = await this.newsDataBase.getAllNews();
    const newsIdExists = newId.find((elemento) => elemento.id === id);
    const today = new Date().toISOString();
    if (!newsIdExists) {
      throw new Error("id news not found");
    }
    const newsUpdate = new News(
      id,
      title || newsIdExists.title,
      description || newsIdExists.description,
      today,
      newsIdExists.author
    );
    await this.newsDataBase.updateNews(newsUpdate.toDBModel())
  };
  public delete = async (input: DeleteNewsInputDTO) => {
    const {id} = input;
    const newId : NewsDB[] = await this.newsDataBase.getAllNews();
    const newsIdExists = newId.find((elemento) => elemento.id === id);
    
    if (!newsIdExists) {
      throw new Error("id news not found");
    }
    await this.newsDataBase.deleteNewsDB(input)
  }
}
