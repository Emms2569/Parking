import { Router } from "express";
import vehiculosController from "../controllers/vehiculosControllers";
class VehiculosRoutes{
    public router : Router = Router();
    constructor(){
        this.config();
    }
    config() : void{
        this.router.get('/',vehiculosController.list);
        this.router.get('/:IdVehiculo',vehiculosController.getOne);
        this.router.post('/',vehiculosController.create);
        this.router.delete('/:IdVehiculo',vehiculosController.delete);
        this.router.put('/:IdVehiculo',vehiculosController.update);
    }
}
const vehiculosRoutes = new VehiculosRoutes();
export default vehiculosRoutes.router;