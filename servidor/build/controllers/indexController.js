"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Puedes acceder a /app/carreras o a cualquier entidad' });
    }
}
exports.indexController = new IndexController();
