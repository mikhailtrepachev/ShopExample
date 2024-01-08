import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { ICarList } from "../models/car-list.model";

export class CarsMapper {
    public static toCarList(cars: AutoListDto): ICarList {
        return {
            items: cars?.items.length > 0 ? cars.items.map(car => ({
                id: car.id,
                distributorName: car.distributorName,
                modelName: car.modelName,
                issueYear: car.issueYear
            })) : [],
        };
    }
}