import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { ICarList } from "../models/car-list.model";
import { AutoDto } from "@app/web-api-client";
import { ICarListItem } from "../models/car-list-item.model";
import { ICarForm } from "../models/car-form.model";
import { CreateAutoCommandDto } from "@app/shared/models/api/auto/create-auto-command-dto.model";

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

    public static toCarCommand(car: ICarForm): CreateAutoCommandDto {
        return {
            id: car.id,
            distributorName: car.distributorName,
            modelName: car.modelName,
            issueYear: car.issueYear
        } as CreateAutoCommandDto;
    }
}