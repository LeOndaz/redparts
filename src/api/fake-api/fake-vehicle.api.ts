/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import {IVehicle} from '~/interfaces/vehicle';
import {VehicleApi} from '~/api/base';
import {
    addUserVehicles,
    getModels,
    getUserVehicles,
    getVehicleByVin,
    getVehicles,
    removeUserVehicles,
} from '~/fake-server/endpoints';

import {categoryResolver, shopCategoryMapper} from '~/api';
import {ICategory} from '~/interfaces/category';
import {CategoryCountableEdge} from '~/api/graphql/types';


export class FakeVehicleApi extends VehicleApi {
    getYears(): Promise<ICategory[]> {
        return categoryResolver.all({
            first: 100,
        }).then(({data: {categories}}) =>
            categories.edges.map((e: CategoryCountableEdge) =>
                shopCategoryMapper.toInternal(e.node)
            ));
    }

    getMakes(categoryName: string, previousCallResult: ICategory[]): Promise<ICategory[]> {
        // TODO possibly undefined
        const category: any = previousCallResult.find(cat => cat.name === categoryName) as ICategory;

        return Promise.resolve(category.children?.map((e: CategoryCountableEdge) => shopCategoryMapper.toInternal(e.node)));
    }

    getModels(categoryName: string, subcategoryName: string, previousCallResult: any[]): Promise<string[]> {
        return getModels(year, make);
    }

    getVehicles(year: string, make: string, model: string): Promise<IVehicle[]> {
        return getVehicles(year, make, model);
    }

    getVehicleByVin(vin: string): Promise<IVehicle> {
        return getVehicleByVin(vin);
    }

    getUserVehicles(): Promise<IVehicle[]> {
        return getUserVehicles();
    }

    addUserVehicle(vehicleId: string): Promise<void> {
        return addUserVehicles(vehicleId);
    }

    removeUserVehicle(vehicleId: string): Promise<void> {
        return removeUserVehicles(vehicleId);
    }
}
