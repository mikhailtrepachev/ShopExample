import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { ICarList } from "../models/car-list.model";
import { IPersonalCarForm } from "../models/personal-car-form.model";
import { CreatePersonalAutoCommandDto } from "@app/shared/models/api/auto/create-personal-auto-command-dto.model";

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

    public static toPersonalCarCommand(personalCar: IPersonalCarForm): CreatePersonalAutoCommandDto {
        return {
            autoId: personalCar.auto.id,
            color: personalCar.color,
            registrationNumber: personalCar.registrationNumber,
            registrationState: personalCar.registrationState,
            horsePower: personalCar.horsePower,
            wheelSize: personalCar.wheelSize,
            technicalState: personalCar.technicalState,
        } as CreatePersonalAutoCommandDto;
    }
}