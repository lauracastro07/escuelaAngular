import { Request, Response, text } from "express";

import pool from '../database';

class ProfesorController{
    public async lista(req: Request, res: Response){
        const profesor = await pool.query('select * from profesor');
        res.json(profesor);
    }

    public async crear(req: Request, res: Response){
        //console.log(req.body); mostrar en consola
        await pool.query('insert into profesor set ?', [req.body]);
        res.json({message: 'Se guardo Profesor'});
    }

    public async actualiza(req: Request, res:Response){
        const { rfc } = req.params;
        await pool.query('update profesor set ? where rfc = ?', [req.body, rfc]);
        res.json({message: 'Se actualizo el Profesor'});
    }

    public async borrar(req: Request, res:Response){
        const { rfc } = req.params;
        await pool.query('delete from profesor where rfc = ?', [rfc]);
        res.json({message: 'Se elimino el Profesor'});
    }

    public async buscar(req: Request, res:Response){
        const { rfc } = req.params;
        const profesor = await pool.query('select * from profesor where rfc = ?', [rfc]);
        if(profesor.length > 0){
            return res.json(profesor[0]);
        }
        res.status(404).json({message: 'No existe el Profesor'});
    }


}

const profesorController = new ProfesorController();// devuelve un objeto
export default profesorController; //importando la instancia