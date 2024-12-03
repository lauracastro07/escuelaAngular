import { Request, Response, text } from "express";

import pool from '../database';

class AlumnoController{
    public async lista(req: Request, res: Response){
        const alumno = await pool.query('select * from alumno');
        res.json(alumno);
    }

    public async crear(req: Request, res: Response){
        await pool.query('insert into alumno set ?', [req.body]);
        res.json({text: 'Se guardo alumno'});
    }

    public async actualiza(req: Request, res:Response){
        const { cuenta } = req.params;
        await pool.query('update alumno set ? where cuenta = ?', [req.body, cuenta]);
        res.json({message: 'Se actualizaro alummno'});
    }

    public async borrar(req: Request, res:Response){
        const { cuenta } = req.params;
        await pool.query('delete from alumno where cuenta = ?', [cuenta]);
        res.json({message: 'Se elimino alumno'});
    }

    public async buscar(req: Request, res:Response){
        const { cuenta } = req.params;
        const alumno = await pool.query('select * from alumno where cuenta = ?', [cuenta]);
        if(alumno.length > 0){
            return res.json(alumno[0]);
        }
        res.status(404).json({message: 'No existe el alumno'});
    }
}

const alumnoController = new AlumnoController();// devuelve un objeto
export default alumnoController; //importando la instancia