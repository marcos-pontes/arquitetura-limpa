import express from 'express';
import { NewsControler } from '../controller/newsController';
import { NewsBusiness } from '../Business/newBusiness';
import { NewsDatabase } from '../BaseDatabase/NewsDatabase';


export const newRouter = express.Router();

const newsController = new NewsControler(
   new NewsBusiness(
         new NewsDatabase())
        ); 

newRouter.get('/', newsController.getNews);
newRouter.post('/', newsController.createNews);
newRouter.put('/:id', newsController.editNews);
newRouter.delete('/:id', newsController.deleteNews);
