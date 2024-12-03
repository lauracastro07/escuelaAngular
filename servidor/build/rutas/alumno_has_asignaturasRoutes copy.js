"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AlumnoAsignaturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Se muestra las asignaturas con relacion a los alumnos'));
    }
}
const alumnoAsignaturaRoutes = new AlumnoAsignaturaRoutes();
exports.default = alumnoAsignaturaRoutes.router;
