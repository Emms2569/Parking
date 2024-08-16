import { Router } from "express";
import accesoController from "../controllers/accesoControllers";

class AccesoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', accesoController.list);
        this.router.get('/:id', accesoController.getOne);
        this.router.post('/', accesoController.create);
        this.router.delete('/:id', accesoController.delete);
        this.router.put('/:id', accesoController.update);
    }
}

const accesoRoutes = new AccesoRoutes();
export default accesoRoutes.router;
