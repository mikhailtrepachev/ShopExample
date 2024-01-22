import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";
import { RegistrationState } from "@app/shared/models/api/registration-state.model";
import { TechnicalState } from "@app/shared/models/api/technical-state.model";
import { Colors } from "@app/shared/models/colors.enum";

export interface IPersonalCarForm {
    auto: AutoDto,
    color: Colors,
    registrationState: RegistrationState,
    registrationNumber: string,
    technicalState: TechnicalState,
    wheelSize: number,
    horsePower: number 
}