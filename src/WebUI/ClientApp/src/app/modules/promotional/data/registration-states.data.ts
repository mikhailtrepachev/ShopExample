import { RegistrationState } from "@app/shared/models/api/registration-state.model";
import { IRegistrationState } from "../models/registration.state";

export const registrationStates: IRegistrationState[] = [
    { name: 'Austria', type: RegistrationState.A, registration: 1 },
    { name: 'Czech', type: RegistrationState.CZ, registration: 2 },
    { name: 'Germany', type: RegistrationState.DE, registration: 3 },
    { name: 'Hungary', type: RegistrationState.H, registration: 4 },
    { name: 'Italy', type: RegistrationState.IT, registration: 5 },
    { name: 'Netherlands', type: RegistrationState.NL, registration: 6 },
    { name: 'Poland', type: RegistrationState.PL, registration: 7 },
    { name: 'Slovenia', type: RegistrationState.S, registration: 8 },
    { name: 'Slovakia', type: RegistrationState.SK, registration: 9 },
]