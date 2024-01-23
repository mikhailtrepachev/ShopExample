import { Colors } from "@app/shared/models/api/colors.model";

export interface IColorState {
    type: Colors;
    name: string;
    color: number;
}