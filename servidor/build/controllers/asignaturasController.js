"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AsignaturasController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asignatura = yield database_1.default.query('select * from asignaturas');
            res.json(asignatura);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into asignaturas set ?', [req.body]);
            res.json({ text: 'Se guardo asignatura' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clave } = req.params;
            yield database_1.default.query('update asignaturas set ? where clave = ?', [req.body, clave]);
            res.json({ message: 'Se actualizo la asignatura' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clave } = req.params;
            yield database_1.default.query('delete from asignaturas where clave = ?', [clave]);
            res.json({ message: 'Se elimino asignatura' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clave } = req.params;
            const asignaturas = yield database_1.default.query('select * from asignaturas where clave = ?', [clave]);
            if (asignaturas.length > 0) {
                return res.json(asignaturas[0]);
            }
            res.status(404).json({ message: 'No existe la asignatura' });
        });
    }
}
const asignaturasController = new AsignaturasController(); // devuelve un objeto
exports.default = asignaturasController; //importando la instancia
