import { Router } from "express";

import profesorController from "../controllers/profesorController";

class ProfesorRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', profesorController.lista);
        this.router.post('/', profesorController.crear);
        this.router.put('/:rfc', profesorController.actualiza);
        this.router.delete('/:rfc', profesorController.borrar);
        this.router.get('/:rfc', profesorController.buscar);
    }
}

const profesorRoutes = new ProfesorRoutes();
export default profesorRoutes.router;