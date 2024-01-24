import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";
import { IRegistrationState } from "./registration.state";
import { ITechnicalState } from "./technical.state";
import { IColorState } from "./color.state";

export interface IPersonalCarListItem { 
    id: number,
    autos: AutoDto,
    color: IColorState,
    registrationState: IRegistrationState,
    registrationNumber: string,
    technicalState: ITechnicalState,
    wheelSize: number,
    horsePower: number 
}