import { Colors } from "@app/shared/models/api/colors.model";
import { IColorState } from "../models/color.state";

export const colorStates: IColorState[] = [
    { name: 'Black', type: Colors.Black, color: 1},
    { name: 'Blue', type: Colors.Blue, color: 2},
    { name: 'Orange', type: Colors.Orange, color: 3},
    { name: 'Purple', type: Colors.Purple, color: 4},
    { name: 'Red', type: Colors.Red, color: 5},
    { name: 'White', type: Colors.White, color: 6},
]