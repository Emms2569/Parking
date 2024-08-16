"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
const accesoRoutes_1 = __importDefault(require("./routes/accesoRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
const plazaRoutes_1 = __importDefault(require("./routes/plazaRoutes"));
const servicioreservaRoutes_1 = __importDefault(require("./routes/servicioreservaRoutes"));
const ubicacionRoutes_1 = __importDefault(require("./routes/ubicacionRoutes"));
const serviciosRoutes_1 = __importDefault(require("./routes/serviciosRoutes"));
const tipoRolRoutes_1 = __importDefault(require("./routes/tipoRolRoutes"));
const registroESRoutes_1 = __importDefault(require("./routes/registroESRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const vehiculosRoutes_1 = __importDefault(require("./routes/vehiculosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.routes1();
        this.routes2();
        this.routes3();
        this.routes4();
        this.routes5();
        this.routes6();
        this.routes7();
        this.routes8();
        this.routes9();
        this.routes10();
    }
    config() {
        this.app.set('port', process.env['PORT'] || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/reserva', reservaRoutes_1.default);
    }
    routes1() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/acceso', accesoRoutes_1.default);
    }
    routes2() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/pago', pagoRoutes_1.default);
    }
    routes3() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/plaza', plazaRoutes_1.default);
    }
    routes4() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/servicioreserva', servicioreservaRoutes_1.default);
    }
    routes5() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/ubicacion', ubicacionRoutes_1.default);
    }
    routes6() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/Vehiculo', vehiculosRoutes_1.default);
    }
    routes7() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/Cliente', clientesRoutes_1.default);
    }
    routes8() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/RegistroES', registroESRoutes_1.default);
    }
    routes9() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/TipoRol', tipoRolRoutes_1.default);
    }
    routes10() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/Servicio', serviciosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
