"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorController_1 = __importDefault(require("../controllers/profesorController"));
class ProfesorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profesorController_1.default.lista);
        this.router.post('/', profesorController_1.default.crear);
        this.router.put('/:rfc', profesorController_1.default.actualiza);
        this.router.delete('/:rfc', profesorController_1.default.borrar);
        this.router.get('/:rfc', profesorController_1.default.buscar);
    }
}
const profesorRoutes = new ProfesorRoutes();
exports.default = profesorRoutes.router;
