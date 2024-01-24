import { Component, OnChanges, OnInit, ViewChild } from "@angular/core";
import { PromotionalFacade } from "../../promotional.facade";
import { first, forkJoin, tap } from "rxjs";
import { ICarList } from "../../models/car-list.model";
import { IPersonalCarForm } from "../../models/personal-car-form.model";
import { CarSelectorComponent } from "../../components/car-selector/car-selector.component";
import { IPersonalCarList } from "../../models/personal-car-list.model";
import { IPersonalCarListItem } from "../../models/personal-car-list-item.model";
import { ICardForm } from "../../models/card.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-promotional-add-page',
    templateUrl: './promotional-add-page.component.html',
    styleUrls: ['./promotional-add-page.component.scss']
})

export class PromotionalAddPageComponent implements OnInit {

    public cars: ICarList = null;
    public personalCars: IPersonalCarList = null;
    public selectedPersonalCar: IPersonalCarListItem;

    public isOnSelect: boolean = true;

    @ViewChild(CarSelectorComponent) public carSelectorForm: CarSelectorComponent;

    constructor(
        private readonly _promotionalFacade: PromotionalFacade,
        private readonly _router: Router,
    ) { }

    public ngOnInit(): void {
        this.loadCars();
    }

    public createPersonalCar(data: IPersonalCarForm): void {
        this._promotionalFacade.createPersonalCar(data).subscribe(_ => this.loadCars());
    }

    public onCancel(): void {
        this.carSelectorForm.form.markAsPristine();
    }

    public onSelectedPersonalCar(selectedPersonalCar: IPersonalCarListItem): void {
        this.selectedPersonalCar = selectedPersonalCar;
        this.isOnSelect = false;
    }

    public createCard(card: ICardForm): void {
        this._promotionalFacade.createCard(card).subscribe(_ => this._router.navigate(['']));
    }

    private loadCars(): void {

        forkJoin({
            cars: this._promotionalFacade.getCarList(),
            personalCars: this._promotionalFacade.getPersonalCarList()
        }).pipe(
            first(),
        ).subscribe({
            next: ({ cars, personalCars }) => {
                this.cars = cars;
                this.personalCars = personalCars;
            },
            error: error => {
                console.error(error)
            }
        });    
    }
}