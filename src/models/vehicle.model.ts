export interface Vehicle {
    id: number;
    name: string;
    owner: string;
    image: string;
    description: string;
  }
  
  export class VehicleModel {
    private vehicles: Vehicle[] = [
      { id: 1, name: 'Car', owner: 'Alice', image: 'car.jpg', description: 'A nice car' },
      { id: 2, name: 'Bike', owner: 'Bob', image: 'bike.jpg', description: 'A fast bike' }
    ];
  
    getAllVehicles(): Vehicle[] {
      return this.vehicles;
    }
  
    getVehicleById(id: number): Vehicle | undefined {
      return this.vehicles.find(vehicle => vehicle.id === id);
    }
  
    addVehicle(vehicle: Vehicle): void {
      this.vehicles.push(vehicle);
    }
  
    updateVehicle(id: number, updatedVehicle: Vehicle): void {
      const index = this.vehicles.findIndex(vehicle => vehicle.id === id);
      if (index !== -1) {
        this.vehicles[index] = updatedVehicle;
      }
    }
  
    deleteVehicle(id: number): void {
      this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
    }
  }
  