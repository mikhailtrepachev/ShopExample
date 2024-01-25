import { IPersonalCarListItem } from "./personal-car-list-item.model";

export interface ICardListItem {
    id: number,
    personalAuto: IPersonalCarListItem;
    price: number,
    isPromoted: boolean,
    description: string
}