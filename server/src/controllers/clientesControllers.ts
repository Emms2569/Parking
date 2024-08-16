import {Request, Response} from "express";
import pool from "../database";
class ClientesController{
    public async list(req : Request, resp : Response){
       const Cliente = await pool.query('Select * FROM Cliente');
       resp.json({Cliente});
    }

    public async getOne(req: Request, resp: Response){
        const {IdCliente} = req.params;
        const Cliente = await pool.query('SELECT * FROM Cliente WHERE IdCliente=?', [IdCliente]);
        if (Cliente.length >0){
            return resp.json(Cliente[0]);
        }
        resp.status(404).json({text: 'El cliente no existe'});
    }

    public async create(req: Request, resp : Response):Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Cliente set ?', [req.body]);
        resp.json({message: 'El cliente fue registrado :)'});
    }

    public async delete(req: Request, resp : Response){
        const {IdCliente}=req.params;
        await pool.query('DELETE FROM Cliente WHERE IdCliente=?', [IdCliente]);
        resp.json({message : 'El cliente fue eliminado'});
    }
    public async update(req : Request, resp : Response){
        const {IdCliente}=req.params;
        await pool.query('UPDATE Cliente set ? WHERE IdCliente = ?', [req.body,IdCliente]);
        resp.json({message : 'El cliente fue actualizado'});
    }
}
const clientesController = new ClientesController();
export default clientesController;
