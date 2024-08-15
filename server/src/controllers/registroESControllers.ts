import {Request, Response} from "express";
import pool from "../database";
class RegistroESController{
    public async list(req : Request, resp : Response){
       const RegistroES = await pool.query('Select * FROM RegistroES');
       resp.json({RegistroES});
    }

    public async getOne(req: Request, resp: Response){
        const {IdRegistro} = req.params;
        const RegistroES = await pool.query('SELECT * FROM RegistroES WHERE IdRegistro=?', [IdRegistro]);
        if (RegistroES.length >0){
            return resp.json(RegistroES[0]);
        }
        resp.status(404).json({text: 'El registro no existe'});
    }

    public async create(req: Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO RegistroES set ?', [req.body]);
        resp.json({message: 'Registro guardado :)'});
    }

    public async delete(req: Request, resp : Response){
        const {IdRegistro}=req.params;
        await pool.query('DELETE FROM RegistroES WHERE IdRegistro=?', [IdRegistro]);
        resp.json({message : 'El registro fue eliminado'});
    }
    public async update(req : Request, resp : Response){
        const {IdRegistro}=req.params;
        await pool.query('UPDATE RegistroES set ? WHERE IdRegistro = ?', [req.body,IdRegistro]);
        resp.json({message : 'El registro fue actualizado'});
    }
}
const registroESController = new RegistroESController();
export default registroESController;
