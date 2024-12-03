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
class AlumnoAsignaturaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumnoasignatura = yield database_1.default.query('select * from alumnoasignatura');
            res.json(alumnoasignatura);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into alumnoasignatura set ?', [req.body]);
            res.json({ text: 'Se guardaron datos' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            yield database_1.default.query('update alumnoasignatura set ? where cuenta = ?', [req.body, cuenta]);
            res.json({ message: 'Se actualizaron los datos' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            yield database_1.default.query('delete from alumnoasignatura where cuenta = ?', [cuenta]);
            res.json({ message: 'Se eliminaron los datos' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const alumnoasignatura = yield database_1.default.query('select * from alumnoasignatura where cuenta = ?', [cuenta]);
            if (alumnoasignatura.length > 0) {
                return res.json(alumnoasignatura[0]);
            }
            res.status(404).json({ message: 'No existe el dato' });
        });
    }
}
const alumnoAsignaturaController = new AlumnoAsignaturaController(); // devuelve un objeto
exports.default = alumnoAsignaturaController; //importando la instancia
