import { Router } from "express";
import reservaController from "../controllers/reservaControllers";

class ReservaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', reservaController.list);
        this.router.get('/:id', reservaController.getOne);
        this.router.post('/', reservaController.create);
        this.router.delete('/:id', reservaController.delete);
        this.router.put('/:id', reservaController.update);
    }
}

const reservaRoutes = new ReservaRoutes();
export default reservaRoutes.router;
