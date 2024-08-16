import { Router } from "express";
import servicioReservaController from "../controllers/servicioreservaControllers";

class ServicioReservaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', servicioReservaController.list);
        this.router.get('/:id', servicioReservaController.getOne);
        this.router.post('/', servicioReservaController.create);
        this.router.delete('/:id', servicioReservaController.delete);
        this.router.put('/:id', servicioReservaController.update);
    }
}

const servicioReservaRoutes = new ServicioReservaRoutes();
export default servicioReservaRoutes.router;
