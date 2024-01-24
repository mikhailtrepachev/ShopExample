import { PersonalAutoDto } from "@app/shared/models/api/auto/personal-auto-dto.model"
import { IPersonalCarListItem } from "./personal-car-list-item.model";

export interface ICardListItem {
    id: number,
    personalAuto: IPersonalCarListItem;
    price: number,
    isPromoted: boolean,
    description: string
}