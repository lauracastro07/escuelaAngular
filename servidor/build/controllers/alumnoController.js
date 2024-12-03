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
class AlumnoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumno = yield database_1.default.query('select * from alumno');
            res.json(alumno);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into alumno set ?', [req.body]);
            res.json({ text: 'Se guardo alumno' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            yield database_1.default.query('update alumno set ? where cuenta = ?', [req.body, cuenta]);
            res.json({ message: 'Se actualizaro alummno' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            yield database_1.default.query('delete from alumno where cuenta = ?', [cuenta]);
            res.json({ message: 'Se elimino alumno' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const alumno = yield database_1.default.query('select * from alumno where cuenta = ?', [cuenta]);
            if (alumno.length > 0) {
                return res.json(alumno[0]);
            }
            res.status(404).json({ message: 'No existe el alumno' });
        });
    }
}
const alumnoController = new AlumnoController(); // devuelve un objeto
exports.default = alumnoController; //importando la instancia
