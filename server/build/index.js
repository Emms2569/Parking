"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('WORKS!!!!!');
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const vehiculosRoutes_1 = __importDefault(require("./routes/vehiculosRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const registroESRoutes_1 = __importDefault(require("./routes/registroESRoutes"));
const tipoRolRoutes_1 = __importDefault(require("./routes/tipoRolRoutes"));
const serviciosRoutes_1 = __importDefault(require("./routes/serviciosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/Vehiculo', vehiculosRoutes_1.default);
        this.app.use('/api/Cliente', clientesRoutes_1.default);
        this.app.use('/api/RegistroES', registroESRoutes_1.default);
        this.app.use('/api/TipoRol', tipoRolRoutes_1.default);
        this.app.use('/api/Servicio', serviciosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
new Server(); //Ejecuta la clase y devuelve un objeto
const server = new Server();
server.start();
