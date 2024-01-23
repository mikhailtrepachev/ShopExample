import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";
import { Colors } from "@app/shared/models/api/colors.model";
import { RegistrationState } from "@app/shared/models/api/registration-state.model";
import { TechnicalState } from "@app/shared/models/api/technical-state.model";

export interface IPersonalCarListItem { 
    id: number,
    autos: AutoDto,
    color: Colors,
    registrationState: RegistrationState,
    registrationNumber: string,
    technicalState: TechnicalState,
    wheelSize: number,
    horsePower: number 
}