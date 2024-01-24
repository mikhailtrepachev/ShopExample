import { PersonalAutoDto } from "@app/shared/models/api/auto/personal-auto-dto.model"

export interface ICardListItem {
    id: number,
    personalAuto: PersonalAutoDto
    price: number,
    isPromoted: boolean
}