import { Request, Response, text } from "express";

import pool from '../database';

class CarreraController{
    public async lista(req: Request, res: Response){
        const carrera = await pool.query('select * from carrera');
        res.json(carrera);
    }

    public async crear(req: Request, res: Response){
        await pool.query('insert into carrera set ?', [req.body]);
        res.json({text: 'Se guardo Carrera'});
    }

    public async actualiza(req: Request, res:Response){
        const { codigo } = req.params;
        await pool.query('update carrera set ? where codigo = ?', [req.body, codigo]);
        res.json({message: 'Se actualizo la carrera'});
    }

    public async borrar(req: Request, res:Response){
        const { codigo } = req.params;
        await pool.query('delete from carrera where codigo = ?', [codigo]);
        res.json({message: 'Se elimino carrera'});
    }

    public async buscar(req: Request, res:Response){
        const { codigo } = req.params;
        const carrera = await pool.query('select * from carrera where codigo = ?', [codigo]);
        if(carrera.length > 0){
            return res.json(carrera[0]);
        }
        res.status(404).json({message: 'No existe la carrera'});
    }
}

const carreraController = new CarreraController();// devuelve un objeto
export default carreraController; //importando la instancia