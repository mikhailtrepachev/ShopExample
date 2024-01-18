import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICarList } from "./models/car-list.model";
import { PromotionalService } from "./services/promotional.service";
import { PromotionalMapper } from "./services/promotional.mapper";

@Injectable({
    providedIn: 'root'
})
export class PromotionalFacade { 
    constructor(
        private readonly _promotionalService: PromotionalService
    ) { }

    public getCarList(): Observable<ICarList> {
        return this._promotionalService.getCarList().pipe(map(res => PromotionalMapper.toCarList(res)))
    }

}