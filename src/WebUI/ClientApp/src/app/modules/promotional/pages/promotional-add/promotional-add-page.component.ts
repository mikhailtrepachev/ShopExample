import { Component, OnInit, ViewChild } from "@angular/core";
import { PromotionalFacade } from "../../promotional.facade";
import { first, tap } from "rxjs";
import { ICarList } from "../../models/car-list.model";
import { IPersonalCarForm } from "../../models/personal-car-form.model";
import { CarSelectorComponent } from "../../components/car-selector/car-selector.component";

@Component({
    selector: 'app-promotional-add-page',
    templateUrl: './promotional-add-page.component.html',
    styleUrls: ['./promotional-add-page.component.scss']
})

export class PromotionalAddPageComponent implements OnInit {
    public cars: ICarList = null;

    @ViewChild(CarSelectorComponent) public carSelectorForm: CarSelectorComponent;

    constructor(
        public readonly _promotionalFacade: PromotionalFacade
    ) { }

    public ngOnInit(): void {
        this.loadCars()
    }

    public createPersonalCar(data: IPersonalCarForm): void {
        this._promotionalFacade.createPersonalCar(data).subscribe();
    }

    public onCancel(): void {
        this.carSelectorForm.form.markAsPristine();
    }

    private loadCars(): void {
        this._promotionalFacade.getCarList().pipe(
            first(),
            tap(cars => this.cars = cars)
        ).subscribe();
    }
}