"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignaturasController_1 = __importDefault(require("../controllers/asignaturasController"));
class AsignaturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', asignaturasController_1.default.lista);
        this.router.post('/', asignaturasController_1.default.crear);
        this.router.put('/:clave', asignaturasController_1.default.actualiza);
        this.router.delete('/:clave', asignaturasController_1.default.borrar);
        this.router.get('/:clave', asignaturasController_1.default.buscar);
    }
}
const asignaturaRoutes = new AsignaturaRoutes();
exports.default = asignaturaRoutes.router;
