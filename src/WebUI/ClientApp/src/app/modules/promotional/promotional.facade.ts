import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICarList } from "./models/car-list.model";
import { PromotionalService } from "./services/promotional.service";
import { PromotionalMapper } from "./services/promotional.mapper";
import { IPersonalCarForm } from "./models/personal-car-form.model";
import { PersonalAutoDto } from "@app/shared/models/api/auto/personal-auto-dto.model";
import { IPersonalCarList } from "./models/personal-car-list.model";
import { ICardForm } from "./models/card.model";
import { CardDto } from "@app/shared/models/api/auto/card-dto.model";
import { ICardList } from "./models/card-list.model";

@Injectable({
    providedIn: 'root'
})
export class PromotionalFacade { 
    constructor(
        private readonly _promotionalService: PromotionalService
    ) { }

    public getCarList(): Observable<ICarList> {
        return this._promotionalService.getCarList().pipe(map(res => PromotionalMapper.toCarList(res)));
    }

    public getCard(cardId: number): Observable<CardDto> {
        return this._promotionalService.getCard(cardId);
    }

    public getCardList(): Observable<ICardList> {
        return this._promotionalService.getCardList().pipe(map(res => PromotionalMapper.toCardList(res)));
    }

    public getPersonalCarList(): Observable<IPersonalCarList> {
        return this._promotionalService.getPersonalCarList().pipe(map(res => PromotionalMapper.toPersonalCarList(res)));
    }

    public createPersonalCar(personalCar: IPersonalCarForm): Observable<PersonalAutoDto> {
        return this._promotionalService.createPersonalCar(PromotionalMapper.toPersonalCarCommand(personalCar));
    }

    public createCard(card: ICardForm): Observable<CardDto> {
        return this._promotionalService.createCard(PromotionalMapper.toCardCommand(card));
    }

}