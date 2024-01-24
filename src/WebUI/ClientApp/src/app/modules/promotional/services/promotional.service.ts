import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpService } from "@app/modules/shared/shared.module";
import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { CardDto } from "@app/shared/models/api/auto/card-dto.model";
import { CardListDto } from "@app/shared/models/api/auto/card-list-dto.model";
import { CreateCardCommandDto } from "@app/shared/models/api/auto/create-card-command-dto.model";
import { CreatePersonalAutoCommandDto } from "@app/shared/models/api/auto/create-personal-auto-command-dto.model";
import { PersonalAutoDto } from "@app/shared/models/api/auto/personal-auto-dto.model";
import { PersonalAutoListDto } from "@app/shared/models/api/auto/personal-auto-list-dto.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PromotionalService extends HttpService {
    constructor(
        httpClient: HttpClient,
        @Inject('BASE_URL') protected _baseUrl: string
    ) { 
        super(httpClient, _baseUrl)
    }

    public getCard(cardId: number): Observable<CardDto> {
        const url = `${this._baseUrl}api/autos/card/get/${cardId}`;
        return this._httpClient.get<CardDto>(url);
    }

    public getCarList(): Observable<AutoListDto> {
        const url = `${this._baseUrl}api/autos/list`;
        return this._httpClient.get<AutoListDto>(url);
    }

    public getCardList(): Observable<CardListDto> {
        const url = `${this._baseUrl}api/autos/card/list/get`;
        return this._httpClient.get<CardListDto>(url);
    }

    public getPersonalCarList(): Observable<PersonalAutoListDto> {
        const url = `${this._baseUrl}api/autos/personal/get/list`;
        return this._httpClient.get<PersonalAutoListDto>(url);
    }

    public createPersonalCar(personalCar: CreatePersonalAutoCommandDto): Observable<PersonalAutoDto> {
        const url = `${this._baseUrl}api/autos/personal/create`;
        return this._httpClient.post<PersonalAutoDto>(url, personalCar);
    }

    public createCard(card: CreateCardCommandDto): Observable<CardDto> {
        const url = `${this._baseUrl}api/autos/card/create`;
        return this._httpClient.post<CardDto>(url, card);
    }
}