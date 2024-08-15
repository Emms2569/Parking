import { Request, Response } from 'express';
import pool from "../database";

class PagoController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM pago');
            resp.json(registros);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de pago' });
        }
    }

    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO pago set ?', [req.body]);
        resp.json({ message: 'Pago guardado' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM pago WHERE idPago = ?', [id]);
        resp.json({ message: 'El pago fue borrado' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE pago set ? WHERE idPago = ?', [req.body, id]);
        resp.json({ message: 'El pago fue actualizado' });
    }
}

export const pagoController = new PagoController();
export default pagoController;
