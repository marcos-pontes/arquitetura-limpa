import express from "express";
import cors from "cors";
import { newRouter } from "./router/newsRouter";
import { authorRouter } from "./router/authorRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3003, () => {
  console.log("servidor está rodando na porta 3003");
});

app.use("/news" , newRouter)
app.use("/author", authorRouter)