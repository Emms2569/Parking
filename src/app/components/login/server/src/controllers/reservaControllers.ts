import { Request, Response } from 'express';
import pool from "../database";

class ReservaController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM reserva');
            resp.json(registros);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de reserva' });
        }
    }
    public async getOne(req: Request, resp: Response){
        const { id } = req.params;
        const Reserva = await pool.query('SELECT * FROM reserva WHERE IdReserva=?', [id]);
        if (Reserva.length >0){
            return resp.json(Reserva[0]);
        }
        resp.status(404).json({text: 'La Reserva no existe'});
    }
    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO reserva set ?', [req.body]);
        resp.json({ message: 'Reserva guardada' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM reserva WHERE idReserva = ?', [id]);
        resp.json({ message: 'La reserva fue borrada' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE reserva set ? WHERE idReserva = ?', [req.body, id]);
        resp.json({ message: 'La reserva fue actualizada' });
    }
}

export const reservaController = new ReservaController();
export default reservaController;
