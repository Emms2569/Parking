CREATE TABLE TipoRol (
    IdRol INT AUTO_INCREMENT PRIMARY KEY,
    DescripTipo VARCHAR(255) NOT NULL
);

CREATE TABLE Acceso (
    IdAcceso INT AUTO_INCREMENT PRIMARY KEY,
    DescripAcceso VARCHAR(255) NOT NULL
);

CREATE TABLE Plaza (
    IdPlaza INT AUTO_INCREMENT PRIMARY KEY,
    DescripPlaza VARCHAR(255) NOT NULL,
    MontoDia DECIMAL(10,2) NOT NULL
);

CREATE TABLE Ubicacion (
    IdUbi INT AUTO_INCREMENT PRIMARY KEY,
    DescripUbi VARCHAR(255) NOT NULL
);

CREATE TABLE Pago (
    IdPago INT AUTO_INCREMENT PRIMARY KEY,
    DescripPago VARCHAR(255) NOT NULL
);

CREATE TABLE Servicio (
    IdServicio INT AUTO_INCREMENT PRIMARY KEY,
    DescripServi VARCHAR(255) NOT NULL,
    MontoServi DECIMAL(10,2) NOT NULL
);

CREATE TABLE Cliente (
    IdCliente INT AUTO_INCREMENT PRIMARY KEY,
    NombreCompleto VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Contrasena VARCHAR(255) NOT NULL,
    Direccion TEXT,
    MedioDifusion VARCHAR(255),
    Observaciones TEXT,
    IdRol INT,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (IdRol) REFERENCES TipoRol(IdRol)
);

CREATE TABLE Vehiculo (
    IdVehiculo INT AUTO_INCREMENT PRIMARY KEY,
    Modelo VARCHAR(255) NOT NULL,
    Matricula VARCHAR(50) UNIQUE NOT NULL,
    Color VARCHAR(50),
    IdCliente INT,
    Tamano VARCHAR(50),
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente)
);

CREATE TABLE Reserva (
    IdReserva INT AUTO_INCREMENT PRIMARY KEY,
    IdCliente INT,
    FechaInicio DATETIME NOT NULL,
    FechaFin DATETIME NOT NULL,
    IdPlaza INT,
    IdAcceso INT,
    IdVehiculo INT,
    Descuento DECIMAL(10,2),
    TotalPago DECIMAL(10,2) NOT NULL,
    IdPago INT,
    Observacion TEXT,
    FechaPago DATETIME,
    Estatus VARCHAR(50),
    IdUbi INT,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente),
    FOREIGN KEY (IdPlaza) REFERENCES Plaza(IdPlaza),
    FOREIGN KEY (IdAcceso) REFERENCES Acceso(IdAcceso),
    FOREIGN KEY (IdVehiculo) REFERENCES Vehiculo(IdVehiculo),
    FOREIGN KEY (IdPago) REFERENCES Pago(IdPago),
    FOREIGN KEY (IdUbi) REFERENCES Ubicacion(IdUbi)
);

CREATE TABLE ServicioReserva (
    IdServicio INT,
    IdReserva INT,
    PRIMARY KEY (IdServicio, IdReserva),
    FOREIGN KEY (IdServicio) REFERENCES Servicio(IdServicio),
    FOREIGN KEY (IdReserva) REFERENCES Reserva(IdReserva)
);

CREATE TABLE RegistroES (
    IdRegistro INT AUTO_INCREMENT PRIMARY KEY,
    IdVehiculo INT,
    HoraEntrada DATETIME NOT NULL,
    HoraSalida DATETIME,
    Fecha DATE NOT NULL,
    FOREIGN KEY (IdVehiculo) REFERENCES Vehiculo(IdVehiculo)
);