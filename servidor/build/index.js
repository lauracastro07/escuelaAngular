"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
const carreraRoutes_1 = __importDefault(require("./rutas/carreraRoutes"));
const alumno_has_asignaturasRoutes_1 = __importDefault(require("./rutas/alumno_has_asignaturasRoutes"));
const alumnoRoutes_1 = __importDefault(require("./rutas/alumnoRoutes"));
const asignaturasRoutes_1 = __importDefault(require("./rutas/asignaturasRoutes"));
const profesorRoutes_1 = __importDefault(require("./rutas/profesorRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/app/carreras', carreraRoutes_1.default);
        this.app.use('/app/alumnosasignatura', alumno_has_asignaturasRoutes_1.default);
        this.app.use('/app/alumnos', alumnoRoutes_1.default);
        this.app.use('/app/asignaturas', asignaturasRoutes_1.default);
        this.app.use('/app/profesores', profesorRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
