import { Router } from "express";
import clientesController from "../controllers/clientesControllers";
class ClientesRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }
    config() : void{
        this.router.get('/',clientesController.list);
        this.router.get('/:IdCliente',clientesController.getOne);
        this.router.post('/',clientesController.create);
        this.router.delete('/:IdCliente',clientesController.delete);
        this.router.put('/:IdCliente',clientesController.update);
    }
}
const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;