"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnoController_1 = __importDefault(require("../controllers/alumnoController"));
class AlumnoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', alumnoController_1.default.lista);
        this.router.post('/', alumnoController_1.default.crear);
        this.router.put('/:cuenta', alumnoController_1.default.actualiza);
        this.router.delete('/:cuenta', alumnoController_1.default.borrar);
        this.router.get('/:cuenta', alumnoController_1.default.buscar);
    }
}
const alumnoRoutes = new AlumnoRoutes();
exports.default = alumnoRoutes.router;
