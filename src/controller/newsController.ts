import { EditNewsSchema } from "../DTO's/editNews.dto";
import { Response, Request } from "express";
import { NewsBusiness } from "../Business/newBusiness";
import { CreateNewsSchema } from "../DTO's/createNews.dto";
import { DeleteNewsSchema } from "../DTO's/deleteNews.dto";

export class NewsControler {
  constructor(private newsBusiness: NewsBusiness) {}
  public getNews = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.newsBusiness.getAllNews();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public createNews = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = CreateNewsSchema.parse({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
      });
      const output = await this.newsBusiness.create(input);
      res.status(200).send("criado com sucesso");
    } catch (error:any) {
        res.status(400).send(error.message);
    }
  };
  public editNews = async (req: Request, res: Response): Promise<void> =>{
    try {
        const input = EditNewsSchema.parse({
            id: req.params.id,
            title: req.body.title,
            description: req.body.description
        })
        const result  = await this.newsBusiness.edit(input);
        res.status(200).send("news editada com sucesso!");
    } catch (error:any) {
        res.send(400).send(error.message)
    }

  }
  public deleteNews = async (req: Request, res: Response): Promise<void>=>{
    try {
        const input = DeleteNewsSchema.parse({
    id:req.params.id,
        })
        const result = await this.newsBusiness.delete(input)
        res.status(200).send("news deleteada com sucesso!")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
  }
}
