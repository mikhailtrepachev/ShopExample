import { Component, OnInit } from "@angular/core";
import { ICarList } from "../../models/car-list.model";
import { CarsFacade } from "../../cars.facade";
import { first, tap } from "rxjs";

@Component({
    selector: 'app-car-list-page',
    templateUrl: './car-list-page.component.html',
    styleUrls: ['./car-list-page.component.scss']
})

export class CarListPageComponent implements OnInit {
    public cars: ICarList = null;

    constructor(
        private readonly _carsFacade: CarsFacade
    ) { }

    public ngOnInit(): void {
        this.loadCars();
    }

    private loadCars(): void {
        this._carsFacade.getCarList().pipe(
            first(),
            tap(cars => this.cars = cars)
        ).subscribe();
    }
 }