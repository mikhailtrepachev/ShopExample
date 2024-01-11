import { Observable, map } from "rxjs";
import { CarsService } from "./services/cars.service";
import { ICarList } from "./models/car-list.model";
import { CarsMapper } from "./services/cars.mapper";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CarsFacade { 
    constructor(
        private readonly _carsService: CarsService
    ) { }

    public getCarList(): Observable<ICarList> {
        return this._carsService.getCarList().pipe(map(res => CarsMapper.toCarList(res)))
    }

    public deleteCar(carId: number): Observable<void> {
        return this._carsService.deleteCar(carId);
    }
}