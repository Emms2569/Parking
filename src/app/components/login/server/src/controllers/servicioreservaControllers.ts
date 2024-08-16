import { Request, Response } from 'express';
import pool from "../database";

class ServicioReservaController {
    public async list(req: Request, resp: Response): Promise<void> {
        try {
            const registros = await pool.query('SELECT * FROM servicioreserva');
            resp.json(registros);
        } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Error al obtener los registros de servicioreserva' });
        }
    }
    public async getOne(req: Request, resp: Response){
        const { id } = req.params;
        const ServiRes = await pool.query('SELECT * FROM servicioreserva WHERE IdServicio=?', [id]);
        if (ServiRes.length >0){
            return resp.json(ServiRes[0]);
        }
        resp.status(404).json({text: 'No existe servicio en esta reserva no existe'});
    }
    public async create(req: Request, resp: Response): Promise<void> {
        await pool.query('INSERT INTO servicioreserva set ?', [req.body]);
        resp.json({ message: 'Servicio de reserva guardado' });
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM servicioreserva WHERE idServicio = ?', [id]);
        resp.json({ message: 'El servicio de reserva fue borrado' });
    }

    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE servicioreserva set ? WHERE idServicio = ?', [req.body, id]);
        resp.json({ message: 'El servicio de reserva fue actualizado' });
    }
}

export const servicioReservaController = new ServicioReservaController();
export default servicioReservaController;
