import { Router } from "express";

import alumnoAsignaturaController from "../controllers/alumno_has_asignaturaController";

class AlumnoAsignaturaRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', alumnoAsignaturaController.lista);
        this.router.post('/', alumnoAsignaturaController.crear);
        this.router.put('/:cuenta', alumnoAsignaturaController.actualiza);
        this.router.delete('/:cuenta', alumnoAsignaturaController.borrar);
        this.router.get('/:cuenta', alumnoAsignaturaController.buscar);
    }
}

const alumnoAsignaturaRoutes = new AlumnoAsignaturaRoutes();
export default alumnoAsignaturaRoutes.router;