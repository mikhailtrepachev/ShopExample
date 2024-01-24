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
import { technicalStatuses } from "../data/technical-states.data";
import { registrationStates } from "../data/registration-states.data";
import { colorStates } from "../data/color-states.data";
import { IPersonalCarListItem } from "../models/personal-car-list-item.model";
import { PersonalAutoDto } from "@app/shared/models/api/auto/personal-auto-dto.model";
import { ICardListItem } from "../models/card-list-item.model";
import { CardDto } from "@app/shared/models/api/auto/card-dto.model";

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

    public static toCard(data: CardDto): ICardListItem {
        return {
            id: data.id,
            personalAuto: this.toPersonalCar(data.personalAuto),
            isPromoted: data.isPromoted,
            price: data.price
        } as ICardListItem;
    }

    public static toCardList(data: CardListDto): ICardList { 
        return {
            items: data?.items.length > 0 ? data.items.map(card => ({
                id: card.id,
                personalAuto: this.toPersonalCar(card.personalAuto),
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
                color: colorStates.find(state => state.type === personalCar.color),
                technicalState: technicalStatuses.find(techState => techState.type === personalCar.technicalState),
                registrationNumber: personalCar.registrationNumber,
                registrationState: registrationStates.find(state => state.type === personalCar.registrationState),
                wheelSize: personalCar.wheelSize,
                horsePower: personalCar.horsePower
            })) : [],
        
        };
    }

    public static toPersonalCar(data: PersonalAutoDto): IPersonalCarListItem {
        return {
            id: data.id,
            autos: data.autos,
            wheelSize: data.wheelSize,
            registrationNumber: data.registrationNumber,
            registrationState: registrationStates.find(state => state.type === data.registrationState),
            color: colorStates.find(state => state.type === data.color),
            technicalState: technicalStatuses.find(state => state.type === data.technicalState),
            horsePower: data.horsePower,
        } as IPersonalCarListItem;
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