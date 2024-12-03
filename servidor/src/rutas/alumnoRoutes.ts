import { Router } from "express";

import alumnoController from "../controllers/alumnoController";

class AlumnoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', alumnoController.lista);
        this.router.post('/', alumnoController.crear);
        this.router.put('/:cuenta', alumnoController.actualiza);
        this.router.delete('/:cuenta', alumnoController.borrar);
        this.router.get('/:cuenta', alumnoController.buscar);
    }
}

const alumnoRoutes = new AlumnoRoutes();
export default alumnoRoutes.router;