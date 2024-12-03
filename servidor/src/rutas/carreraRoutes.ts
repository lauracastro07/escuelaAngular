import { Router } from "express";

import carreraController from "../controllers/carreraController";

class CarreraRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', carreraController.lista);
        this.router.post('/', carreraController.crear);
        this.router.put('/:codigo', carreraController.actualiza);
        this.router.delete('/:codigo', carreraController.borrar);
        this.router.get('/:codigo', carreraController.buscar);
    }
}

const carreraRoutes = new CarreraRoutes();
export default carreraRoutes.router;