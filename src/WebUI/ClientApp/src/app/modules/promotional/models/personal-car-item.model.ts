import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";
import { ITechnicalState } from "./technical.state";
import { IRegistrationState } from "./registration.state";
import { IColorState } from "./color.state";

export interface IPersonalCarItem {
    id: number,
    autos: AutoDto,
    color: IColorState,
    registrationState: IRegistrationState,
    registrationNumber: string,
    technicalState: ITechnicalState,
    wheelSize: number,
    horsePower: number 
}