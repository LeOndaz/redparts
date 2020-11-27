/* eslint-disable import/prefer-default-export */

// application
import { IVehicle } from '~/interfaces/vehicle';

export abstract class VehicleApi {
    abstract getYears(): Promise<any[]>;

    abstract getMakes(categoryName: string, previousCallResult: any[]): Promise<any[]>;

    abstract getModels(categoryName: string, subcategoryName: string, previousCallResult: any[]): Promise<any[]>;

    abstract getVehicles(year: string, make: string, model: string): Promise<IVehicle[]>;

    abstract getVehicleByVin(vin: string): Promise<IVehicle>;

    abstract getUserVehicles(): Promise<IVehicle[]>;

    abstract addUserVehicle(vehicleId: number): Promise<void>;

    abstract removeUserVehicle(vehicleId: number): Promise<void>;
}
