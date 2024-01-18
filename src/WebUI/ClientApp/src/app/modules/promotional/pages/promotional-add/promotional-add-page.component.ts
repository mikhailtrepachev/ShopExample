import { Component, OnInit } from "@angular/core";
import { PromotionalFacade } from "../../promotional.facade";
import { first, tap } from "rxjs";
import { ICarList } from "../../models/car-list.model";

@Component({
    selector: 'app-promotional-add-page',
    templateUrl: './promotional-add-page.component.html',
    styleUrls: ['./promotional-add-page.component.scss']
})

export class PromotionalAddPageComponent implements OnInit {
    public cars: ICarList = null;

    constructor(
        public readonly _promotionalFacade: PromotionalFacade
    ) { }

    public ngOnInit(): void {
        this.loadCars()
    }

    private loadCars(): void {
        this._promotionalFacade.getCarList().pipe(
            first(),
            tap(cars => this.cars = cars)
        ).subscribe();
    }
}