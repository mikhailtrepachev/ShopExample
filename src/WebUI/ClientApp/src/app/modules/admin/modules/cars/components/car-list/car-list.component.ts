import { Component, Input, OnInit } from "@angular/core";
import { ICarListItem } from "../../models/car-list-item.model";
import { ICarList } from "../../models/car-list.model";
import { CarsFacade } from "../../cars.facade";

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit { 
    public items: ICarListItem[] = [];

    @Input() public cars: ICarList

    constructor(
        private readonly _carsFacade: CarsFacade
    ) { }

    public ngOnInit(): void {

        this.items = this.cars?.items || [];
    }
}