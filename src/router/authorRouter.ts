import express from 'express';
import { AuthorControler } from '../controller/AuthorController';
import { AuthorBusiness } from '../Business/AuthorBusiness';
import { AuthorDatabase } from '../BaseDatabase/AuthorDatabase';


export const authorRouter = express.Router();

const authorController = new AuthorControler(
   new AuthorBusiness(
         new AuthorDatabase())
        ); 

authorRouter.get('/', authorController.getAuthor);