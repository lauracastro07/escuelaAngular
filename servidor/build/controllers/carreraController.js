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
class CarreraController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carrera = yield database_1.default.query('select * from carrera');
            res.json(carrera);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into carrera set ?', [req.body]);
            res.json({ text: 'Se guardo Carrera' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('update carrera set ? where codigo = ?', [req.body, codigo]);
            res.json({ message: 'Se actualizo la carrera' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('delete from carrera where codigo = ?', [codigo]);
            res.json({ message: 'Se elimino carrera' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const carrera = yield database_1.default.query('select * from carrera where codigo = ?', [codigo]);
            if (carrera.length > 0) {
                return res.json(carrera[0]);
            }
            res.status(404).json({ message: 'No existe la carrera' });
        });
    }
}
const carreraController = new CarreraController(); // devuelve un objeto
exports.default = carreraController; //importando la instancia
