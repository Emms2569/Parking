"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservaController = void 0;
const database_1 = __importDefault(require("../database"));
class ReservaController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const registros = yield database_1.default.query('SELECT * FROM reserva');
                resp.json(registros);
            }
            catch (error) {
                console.error(error);
                resp.status(500).json({ message: 'Error al obtener los registros de reserva' });
            }
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Reserva = yield database_1.default.query('SELECT * FROM reserva WHERE IdReserva=?', [id]);
            if (Reserva.length > 0) {
                return resp.json(Reserva[0]);
            }
            resp.status(404).json({ text: 'La Reserva no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reserva set ?', [req.body]);
            resp.json({ message: 'Reserva guardada' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM reserva WHERE idReserva = ?', [id]);
            resp.json({ message: 'La reserva fue borrada' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reserva set ? WHERE idReserva = ?', [req.body, id]);
            resp.json({ message: 'La reserva fue actualizada' });
        });
    }
}
exports.reservaController = new ReservaController();
exports.default = exports.reservaController;
