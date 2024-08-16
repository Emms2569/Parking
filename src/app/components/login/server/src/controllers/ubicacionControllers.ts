import { Request, Response } from 'express';
import pool from "../database";

class UbicacionController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM ubicacion');
            resp.json(registros);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de ubicación' });
        }
    }

    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO ubicacion set ?', [req.body]);
        resp.json({ message: 'Ubicación guardada' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM ubicacion WHERE idUbi = ?', [id]);
        resp.json({ message: 'La ubicación fue borrada' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE ubicacion set ? WHERE idUbi = ?', [req.body, id]);
        resp.json({ message: 'La ubicación fue actualizada' });
    }
}

export const ubicacionController = new UbicacionController();
export default ubicacionController;
