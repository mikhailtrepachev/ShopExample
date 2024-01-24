import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { ICarList } from "../models/car-list.model";
import { IPersonalCarForm } from "../models/personal-car-form.model";
import { CreatePersonalAutoCommandDto } from "@app/shared/models/api/auto/create-personal-auto-command-dto.model";
import { PersonalAutoListDto } from "@app/shared/models/api/auto/personal-auto-list-dto.model";
import { IPersonalCarList } from "../models/personal-car-list.model";
import { ICardForm } from "../models/card.model";
import { CreateCardCommandDto } from "@app/shared/models/api/auto/create-card-command-dto.model";
import { CardListDto } from "@app/shared/models/api/auto/card-list-dto.model";
import { ICardList } from "../models/card-list.model";

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

    public static toCardList(data: CardListDto): ICardList { 
        return {
            items: data?.items.length > 0 ? data.items.map(card => ({
                id: card.id,
                personalAuto: card.personalAuto,
                isPromoted: card.isPromoted,
                price: card.price
            })) : [],
        };
    }

    public static toPersonalCarList(data: PersonalAutoListDto): IPersonalCarList {
        return {
            items: data?.items.length > 0 ? data.items.map(personalCar => ({
                id: personalCar.id,
                autos: personalCar.autos,
                color: personalCar.color,
                technicalState: personalCar.technicalState,
                registrationNumber: personalCar.registrationNumber,
                registrationState: personalCar.registrationState,
                wheelSize: personalCar.wheelSize,
                horsePower: personalCar.horsePower
            })) : [],
        };
    }

    public static toPersonalCarCommand(personalCar: IPersonalCarForm): CreatePersonalAutoCommandDto {
        return {
            id: personalCar.id,
            autoId: personalCar.autos.id,
            color: personalCar.color,
            registrationNumber: personalCar.registrationNumber,
            registrationState: personalCar.registrationState,
            horsePower: personalCar.horsePower,
            wheelSize: personalCar.wheelSize,
            technicalState: personalCar.technicalState,
        } as CreatePersonalAutoCommandDto;
    }

    public static toCardCommand(card: ICardForm): CreateCardCommandDto {
        return {
            personalAutoId: card.personalCarId,
            price: card.price
        } as CreateCardCommandDto;
    }
}