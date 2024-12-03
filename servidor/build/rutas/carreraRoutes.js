"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carreraController_1 = __importDefault(require("../controllers/carreraController"));
class CarreraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', carreraController_1.default.lista);
        this.router.post('/', carreraController_1.default.crear);
        this.router.put('/:codigo', carreraController_1.default.actualiza);
        this.router.delete('/:codigo', carreraController_1.default.borrar);
        this.router.get('/:codigo', carreraController_1.default.buscar);
    }
}
const carreraRoutes = new CarreraRoutes();
exports.default = carreraRoutes.router;
