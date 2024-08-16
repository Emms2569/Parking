import {Request, Response} from "express";
import pool from "../database";
class TipoRolController{
    public async list(req : Request, resp : Response){
       const TipoRol = await pool.query('Select * FROM TipoRol');
       resp.json({TipoRol});
    }

    public async getOne(req: Request, resp: Response){
        const {IdRol} = req.params;
        const TipoRol = await pool.query('SELECT * FROM TipoRol WHERE IdRol=?', [IdRol]);
        if (TipoRol.length >0){
            return resp.json(TipoRol[0]);
        }
        resp.status(404).json({text: 'El rol no existe'});
    }

    public async create(req: Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO TipoRol set ?', [req.body]);
        resp.json({message: 'El rol fue registrado :)'});
    }

    public async delete(req: Request, resp : Response){
        const {IdRol}=req.params;
        await pool.query('DELETE FROM TipoRol WHERE IdRol=?', [IdRol]);
        resp.json({message : 'El rol fue eliminado'});
    }
    public async update(req : Request, resp : Response){
        const {IdRol}=req.params;
        await pool.query('UPDATE TipoRol set ? WHERE IdRol = ?', [req.body,IdRol]);
        resp.json({message : 'El rol fue actualizado'});
    }
}
const tipoRolController = new TipoRolController();
export default tipoRolController;
