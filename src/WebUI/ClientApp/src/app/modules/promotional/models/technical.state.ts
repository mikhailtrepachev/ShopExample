import { TechnicalState } from "@app/shared/models/api/technical-state.model";

export interface ITechnicalState {
    type: TechnicalState;
    name: string;
    state: number;
}