import { Router } from "express";
import serviciosController from "../controllers/serviciosControllers";
class ServiciosRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }
    config() : void{
        this.router.get('/',serviciosController.list);
        this.router.get('/:IdServicio',serviciosController.getOne);
        this.router.post('/',serviciosController.create);
        this.router.delete('/:IdServicio',serviciosController.delete);
        this.router.put('/:IdServicio',serviciosController.update);
    }
}
const serviciosRoutes = new ServiciosRoutes();
export default serviciosRoutes.router;