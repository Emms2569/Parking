import {Request, Response} from "express";
import pool from "../database";
class VehiculosController{
    public async list(req : Request, resp : Response){
       const Vehiculo = await pool.query('Select * FROM Vehiculo');
       resp.json({Vehiculo});
    }

    public async getOne(req: Request, resp: Response){
        const {IdVehiculo} = req.params;
        const Vehiculo = await pool.query('SELECT * FROM Vehiculo WHERE IdVehiculo=?', [IdVehiculo]);
        if (Vehiculo.length >0){
            return resp.json(Vehiculo[0]);
        }
        resp.status(404).json({text: 'El vehiculo no existe'});
    }

    public async create(req: Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Vehiculo set ?', [req.body]);
        resp.json({message: 'El vehiculo fue registrado :)'});
    }

    public async delete(req: Request, resp : Response){
        const {IdVehiculo}=req.params;
        await pool.query('DELETE FROM Vehiculo WHERE IdVehiculo=?', [IdVehiculo]);
        resp.json({message : 'El vehiculo fue eliminado'});
    }
    public async update(req : Request, resp : Response){
        const {IdVehiculo}=req.params;
        await pool.query('UPDATE Vehiculo set ? WHERE IdVehiculo = ?', [req.body,IdVehiculo]);
        resp.json({message : 'El vehiculo fue actualizado'});
    }
}
const vehiculosController = new VehiculosController();
export default vehiculosController;
