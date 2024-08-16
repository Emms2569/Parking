import { Router } from "express";
import tipoRolController from "../controllers/tipoRolControllers";
class TipoRolRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }

    
    config() : void{
        this.router.get('/',tipoRolController.list);
        this.router.get('/:IdRol',tipoRolController.getOne);
        this.router.post('/',tipoRolController.create);
        this.router.delete('/:IdRol',tipoRolController.delete);
        this.router.put('/:IdRol',tipoRolController.update);
    }
}
const tipoRolRoutes = new TipoRolRoutes();
export default tipoRolRoutes.router;