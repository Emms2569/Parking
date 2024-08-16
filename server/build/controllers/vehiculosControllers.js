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
const database_1 = __importDefault(require("../database"));
class VehiculosController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const Vehiculo = yield database_1.default.query('Select * FROM Vehiculo');
            resp.json({ Vehiculo });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdVehiculo } = req.params;
            const Vehiculo = yield database_1.default.query('SELECT * FROM Vehiculo WHERE IdVehiculo=?', [IdVehiculo]);
            if (Vehiculo.length > 0) {
                return resp.json(Vehiculo[0]);
            }
            resp.status(404).json({ text: 'El vehiculo no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Vehiculo set ?', [req.body]);
            resp.json({ message: 'El vehiculo fue registrado :)' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdVehiculo } = req.params;
            yield database_1.default.query('DELETE FROM Vehiculo WHERE IdVehiculo=?', [IdVehiculo]);
            resp.json({ message: 'El vehiculo fue eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdVehiculo } = req.params;
            yield database_1.default.query('UPDATE Vehiculo set ? WHERE IdVehiculo = ?', [req.body, IdVehiculo]);
            resp.json({ message: 'El vehiculo fue actualizado' });
        });
    }
}
const vehiculosController = new VehiculosController();
exports.default = vehiculosController;
