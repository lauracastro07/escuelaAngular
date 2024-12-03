import { Request, Response, text } from "express";

class IndexController{
    public index(req: Request, res: Response){
        res.json({text: 'Puedes acceder a /app/carreras o a cualquier entidad'});
    }
}

export const indexController = new IndexController();