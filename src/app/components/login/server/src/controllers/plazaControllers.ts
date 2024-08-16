import { Request, Response } from 'express';
import pool from "../database";

class PlazaController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM plaza');
            resp.json(registros);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de plaza' });
        }
    }
    public async getOne(req: Request, resp: Response){
        const { id } = req.params;
        const Plaza = await pool.query('SELECT * FROM plaza WHERE IdPlaza=?', [id]);
        if (Plaza.length >0){
            return resp.json(Plaza[0]);
        }
        resp.status(404).json({text: 'La Plaza no existe'});
    }
    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO plaza set ?', [req.body]);
        resp.json({ message: 'Plaza guardada' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM plaza WHERE idPlaza = ?', [id]);
        resp.json({ message: 'La plaza fue borrada' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE plaza set ? WHERE idPlaza = ?', [req.body, id]);
        resp.json({ message: 'La plaza fue actualizada' });
    }
}

export const plazaController = new PlazaController();
export default plazaController;
