import { Component, OnInit, ViewChild } from "@angular/core";
import { ICarList } from "../../models/car-list.model";
import { CarsFacade } from "../../cars.facade";
import { first, tap } from "rxjs";
import { ICarForm } from "../../models/car-form.model";
import { CarFormComponent } from "../../components/car-form/car-form.component";

@Component({
    selector: 'app-car-list-page',
    templateUrl: './car-list-page.component.html',
    styleUrls: ['./car-list-page.component.scss']
})

export class CarListPageComponent implements OnInit {
    public cars: ICarList = null;


    @ViewChild(CarFormComponent) public carForm: CarFormComponent;
    constructor(
        private readonly _carsFacade: CarsFacade
    ) { }

    public ngOnInit(): void {
        this.loadCars();
    }

    public createCar(data: ICarForm): void {
        this._carsFacade.createCar(data).subscribe(_ => this.loadCars());
    }

    public onCancel(): void {
        this.carForm.form.markAsPristine();
    }

    private loadCars(): void {
        this._carsFacade.getCarList().pipe(
            first(),
            tap(cars => this.cars = cars)
        ).subscribe();
    }
 }