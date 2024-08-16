import { Router } from "express";
import plazaController from "../controllers/plazaControllers";

class PlazaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', plazaController.list);
        this.router.get('/:id', plazaController.getOne);
        this.router.post('/', plazaController.create);
        this.router.delete('/:id', plazaController.delete);
        this.router.put('/:id', plazaController.update);
    }
}

const plazaRoutes = new PlazaRoutes();
export default plazaRoutes.router;
