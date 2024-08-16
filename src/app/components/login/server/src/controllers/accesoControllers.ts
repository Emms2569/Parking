import { Request, Response } from 'express';
import pool from "../database";

class AccesoController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM acceso');
            resp.json(registros);
            resp.json({ message: 'lista de registros de accesos' });
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de acceso' });
        }
    }

    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO acceso set ?', [req.body]);
        resp.json({ message: 'Acceso guardado' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM acceso WHERE idAcceso = ?', [id]);
        resp.json({ message: 'El acceso fue borrado' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE acceso set ? WHERE idAcceso = ?', [req.body, id]);
        resp.json({ message: 'El acceso fue actualizado' });
    }
}

export const accesoController = new AccesoController();
export default accesoController;
