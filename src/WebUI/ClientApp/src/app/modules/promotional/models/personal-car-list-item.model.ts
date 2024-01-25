import { IRegistrationState } from "./registration.state";
import { ITechnicalState } from "./technical.state";
import { IColorState } from "./color.state";
import { ICarListItem } from "./car-list-item.model";

export interface IPersonalCarListItem { 
    id: number,
    autos: ICarListItem,
    color: IColorState,
    registrationState: IRegistrationState,
    registrationNumber: string,
    technicalState: ITechnicalState,
    wheelSize: number,
    horsePower: number 
}