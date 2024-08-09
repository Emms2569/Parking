import { Request, Response } from 'express';
import { VehicleModel, Vehicle } from '../models/vehicle.model';

const vehicleModel = new VehicleModel();

export class VehicleController {
  getAllVehicles(req: Request, res: Response): void {
    const vehicles = vehicleModel.getAllVehicles();
    res.json(vehicles);
  }

  getVehicleById(req: Request, res: Response): void {
    const id = parseInt(req.params['id'], 10);
    const vehicle = vehicleModel.getVehicleById(id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).send('Vehicle not found');
    }
  }

  addVehicle(req: Request, res: Response): void {
    const newVehicle: Vehicle = req.body;
    vehicleModel.addVehicle(newVehicle);
    res.status(201).json(newVehicle);
  }

  updateVehicle(req: Request, res: Response): void {
    const id = parseInt(req.params['id'], 10);
    const updatedVehicle: Vehicle = req.body;
    vehicleModel.updateVehicle(id, updatedVehicle);
    res.json(updatedVehicle);
  }

  deleteVehicle(req: Request, res: Response): void {
    const id = parseInt(req.params['id'], 10);
    vehicleModel.deleteVehicle(id);
    res.status(204).send();
  }
}
