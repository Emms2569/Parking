import { Router } from "express";
import registroESController from "../controllers/registroESControllers";
class RegistroESRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }
    config() : void{
        this.router.get('/',registroESController.list);
        this.router.get('/:IdRegistro',registroESController.getOne);
        this.router.post('/',registroESController.create);
        this.router.delete('/:IdRegistro',registroESController.delete);
        this.router.put('/:IdRegistro',registroESController.update);
    }
}
const registroESRoutes = new RegistroESRoutes();
export default registroESRoutes.router;