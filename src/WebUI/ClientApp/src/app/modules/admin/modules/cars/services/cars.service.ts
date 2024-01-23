import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpService } from "@app/modules/shared/shared.module";
import { AutoListDto } from "@app/shared/models/api/auto/auto-list-dto.model";
import { AutoDto } from "@app/web-api-client";
import { Observable } from "rxjs";
import { ICarForm } from "../models/car-form.model";
import { CreateAutoCommandDto } from "@app/shared/models/api/auto/create-auto-command-dto.model";

@Injectable({
    providedIn: 'root'
})
export class CarsService extends HttpService {
    constructor(
        httpClient: HttpClient,
        @Inject('BASE_URL') protected _baseUrl: string) {
            super(httpClient, _baseUrl)
        }

    public getCarList(): Observable<AutoListDto> {
        const url = `${this._baseUrl}api/autos/list`;
        return this._httpClient.get<AutoListDto>(url);
    }

    public createCar(car: CreateAutoCommandDto): Observable<AutoDto> {
        const url = `${this._baseUrl}api/autos`;
        return this._httpClient.post<AutoDto>(url, car);
    }

    public deleteCar(carId: number): Observable<void> {
        const url = `${this._baseUrl}api/autos/delete/${carId}`;
        return this._httpClient.delete<void>(url);
    }
}