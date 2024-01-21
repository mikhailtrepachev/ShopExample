import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { ICarList } from "../models/car-list.model";

export class PromotionalMapper { 
    public static toCarList(data: AutoListDto): ICarList {
        return {
            items: data?.items.length > 0 ? data.items.map(car => ({
                id: car.id,
                distributorName: car.distributorName,
                modelName: car.modelName,
                issueYear: car.issueYear
            })) : [],
        };
    }

    public static toPersonalCarCommand(data: )
}