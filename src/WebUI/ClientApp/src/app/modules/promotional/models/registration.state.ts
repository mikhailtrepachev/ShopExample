import { RegistrationState } from "@app/shared/models/api/registration-state.model";

export interface IRegistrationState {
    type: RegistrationState;
    name: string;
    registration: number;
}