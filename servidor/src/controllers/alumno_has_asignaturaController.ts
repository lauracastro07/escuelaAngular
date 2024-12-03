import { Request, Response, text } from "express";

import pool from '../database';

class AlumnoAsignaturaController{
    public async lista(req: Request, res: Response){
        const alumnoasignatura = await pool.query('select * from alumnoasignatura');
        res.json(alumnoasignatura);
    }

    public async crear(req: Request, res: Response){
        await pool.query('insert into alumnoasignatura set ?', [req.body]);
        res.json({text: 'Se guardaron datos'});
    }

    public async actualiza(req: Request, res:Response){
        const { cuenta } = req.params;
        await pool.query('update alumnoasignatura set ? where cuenta = ?', [req.body, cuenta]);
        res.json({message: 'Se actualizaron los datos'});
    }

    public async borrar(req: Request, res:Response){
        const { cuenta } = req.params;
        await pool.query('delete from alumnoasignatura where cuenta = ?', [cuenta]);
        res.json({message: 'Se eliminaron los datos'});
    }

    public async buscar(req: Request, res:Response){
        const { cuenta } = req.params;
        const alumnoasignatura = await pool.query('select * from alumnoasignatura where cuenta = ?', [cuenta]);
        if(alumnoasignatura.length > 0){
            return res.json(alumnoasignatura[0]);
        }
        res.status(404).json({message: 'No existe el dato'});
    }
}

const alumnoAsignaturaController = new AlumnoAsignaturaController();// devuelve un objeto
export default alumnoAsignaturaController; //importando la instancia