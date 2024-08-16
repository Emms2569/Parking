import { Router } from "express";
import pagoController from "../controllers/pagoControllers";

class PagoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', pagoController.list);
        this.router.get('/:id', pagoController.getOne);
        this.router.post('/', pagoController.create);
        this.router.delete('/:id', pagoController.delete);
        this.router.put('/:id', pagoController.update);
    }
}

const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;
