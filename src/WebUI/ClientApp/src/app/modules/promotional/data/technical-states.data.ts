import { TechnicalState } from "@app/shared/models/api/technical-state.model";
import { ITechnicalState } from "../models/technical.state";

export const technicalStatuses: ITechnicalState[] = [
    { name: 'Excellent', type: TechnicalState.Excellent, state: 1 },
    { name: 'Good', type: TechnicalState.Good, state: 2 },
    { name: 'Bad', type: TechnicalState.Bad, state: 3 },
    { name: 'Broken', type: TechnicalState.Broken, state: 4 }
]