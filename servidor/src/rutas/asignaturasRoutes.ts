import { Router } from "express";

import asignaturasController from "../controllers/asignaturasController";

class AsignaturaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', asignaturasController.lista);
        this.router.post('/', asignaturasController.crear);
        this.router.put('/:clave', asignaturasController.actualiza);
        this.router.delete('/:clave', asignaturasController.borrar);
        this.router.get('/:clave', asignaturasController.buscar);
    }
}

const asignaturaRoutes = new AsignaturaRoutes();
export default asignaturaRoutes.router;