import { Router } from "express";
import ubicacionController from "../controllers/ubicacionControllers";

class UbicacionRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ubicacionController.list);
        this.router.get('/:id', ubicacionController.getOne);
        this.router.post('/', ubicacionController.create);
        this.router.delete('/:id', ubicacionController.delete);
        this.router.put('/:id', ubicacionController.update);
    }
}

const ubicacionRoutes = new UbicacionRoutes();
export default ubicacionRoutes.router;
