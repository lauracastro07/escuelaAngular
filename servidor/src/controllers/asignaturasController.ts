import { Request, Response, text } from "express";

import pool from '../database';

class AsignaturasController{
    public async lista(req: Request, res: Response){
        const asignatura = await pool.query('select * from asignaturas');
        res.json(asignatura);
    }

    public  async crear(req: Request, res: Response){
        await pool.query('insert into asignaturas set ?', [req.body]);
        res.json({text: 'Se guardo asignatura'});
    }

    public async actualiza(req: Request, res:Response){
        const { clave } = req.params;
        await pool.query('update asignaturas set ? where clave = ?', [req.body, clave]);
        res.json({message: 'Se actualizo la asignatura'});
    }

    public async borrar(req: Request, res:Response){
        const { clave } = req.params;
        await pool.query('delete from asignaturas where clave = ?', [clave]);
        res.json({message: 'Se elimino asignatura'});
    }

    public async buscar(req: Request, res:Response){
        const { clave } = req.params;
        const asignaturas = await pool.query('select * from asignaturas where clave = ?', [clave]);
        if(asignaturas.length > 0){
            return res.json(asignaturas[0]);
        }
        res.status(404).json({message: 'No existe la asignatura'});
    }
}

const asignaturasController = new AsignaturasController();// devuelve un objeto
export default asignaturasController; //importando la instancia