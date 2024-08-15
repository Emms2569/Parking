import {Request, Response} from "express";
import pool from "../database";
class ServiciosController{
    public async list(req : Request, resp : Response){
       const Servicio = await pool.query('Select * FROM Servicio');
       resp.json({Servicio});
    }

    public async getOne(req: Request, resp: Response){
        const {IdServicio} = req.params;
        const Servicio = await pool.query('SELECT * FROM Servicio WHERE IdServicio=?', [IdServicio]);
        if (Servicio.length >0){
            return resp.json(Servicio[0]);
        }
        resp.status(404).json({text: 'El servicio no existe'});
    }

    public async create(req: Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Servicio set ?', [req.body]);
        resp.json({message: 'El servicio fue registrado :)'});
    }

    public async delete(req: Request, resp : Response){
        const {IdServicio}=req.params;
        await pool.query('DELETE FROM Servicio WHERE IdServicio=?', [IdServicio]);
        resp.json({message : 'El servicio fue eliminado'});
    }
    public async update(req : Request, resp : Response){
        const {IdServicio}=req.params;
        await pool.query('UPDATE Servicio set ? WHERE IdServicio = ?', [req.body,IdServicio]);
        resp.json({message : 'El servicio fue actualizado'});
    }
}
const serviciosController = new ServiciosController();
export default serviciosController;
