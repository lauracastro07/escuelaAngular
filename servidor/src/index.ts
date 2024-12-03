import express, { Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './rutas/indexRoutes';
import carreraRoutes from './rutas/carreraRoutes';
import alumno_has_asignaturasRoutes from './rutas/alumno_has_asignaturasRoutes';
import alumnoRoutes from './rutas/alumnoRoutes';
import asignaturasRoutes from './rutas/asignaturasRoutes';
import profesorRoutes from './rutas/profesorRoutes';

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('/app/carreras', carreraRoutes);
        this.app.use('/app/alumnosasignatura', alumno_has_asignaturasRoutes);
        this.app.use('/app/alumnos', alumnoRoutes);
        this.app.use('/app/asignaturas', asignaturasRoutes);
        this.app.use('/app/profesores', profesorRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();