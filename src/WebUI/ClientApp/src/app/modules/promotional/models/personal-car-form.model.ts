import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { Colors } from "@app/shared/models/colors.enum";
import { RegistrationState } from "@app/shared/models/registration-state.enum";
import { TechnicalState } from "@app/shared/models/technical-state.enum";

export interface IPersonalCarForm {
    auto: AutoListDto,
    color: Colors,
    registrationState: RegistrationState,
    registrationNumber: string,
    technicalState: TechnicalState,
    wheelSize: number,
    horsePower: number 
}