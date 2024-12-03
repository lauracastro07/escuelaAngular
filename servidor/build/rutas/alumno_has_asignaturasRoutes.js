"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumno_has_asignaturaController_1 = __importDefault(require("../controllers/alumno_has_asignaturaController"));
class AlumnoAsignaturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', alumno_has_asignaturaController_1.default.lista);
        this.router.post('/', alumno_has_asignaturaController_1.default.crear);
        this.router.put('/:cuenta', alumno_has_asignaturaController_1.default.actualiza);
        this.router.delete('/:cuenta', alumno_has_asignaturaController_1.default.borrar);
        this.router.get('/:cuenta', alumno_has_asignaturaController_1.default.buscar);
    }
}
const alumnoAsignaturaRoutes = new AlumnoAsignaturaRoutes();
exports.default = alumnoAsignaturaRoutes.router;
