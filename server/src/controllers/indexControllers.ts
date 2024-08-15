import {Request, Response} from "express";

class IndexController{
    public index(req : Request, resp : Response){
        resp.send('Hola que hace!!!');
    }
}
export const indexController = new IndexController();
