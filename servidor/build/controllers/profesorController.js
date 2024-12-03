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
class ProfesorController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profesor = yield database_1.default.query('select * from profesor');
            res.json(profesor);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); mostrar en consola
            yield database_1.default.query('insert into profesor set ?', [req.body]);
            res.json({ message: 'Se guardo Profesor' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            yield database_1.default.query('update profesor set ? where rfc = ?', [req.body, rfc]);
            res.json({ message: 'Se actualizo el Profesor' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            yield database_1.default.query('delete from profesor where rfc = ?', [rfc]);
            res.json({ message: 'Se elimino el Profesor' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rfc } = req.params;
            const profesor = yield database_1.default.query('select * from profesor where rfc = ?', [rfc]);
            if (profesor.length > 0) {
                return res.json(profesor[0]);
            }
            res.status(404).json({ message: 'No existe el Profesor' });
        });
    }
}
const profesorController = new ProfesorController(); // devuelve un objeto
exports.default = profesorController; //importando la instancia
