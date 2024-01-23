import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { ICarListItem } from "../../models/car-list-item.model";
import { ICarList } from "../../models/car-list.model";
import { CarsFacade } from "../../cars.facade";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.scss'],
    providers: [MessageService]
})

export class CarListComponent implements OnChanges { 
    public items: ICarListItem[] = [];

    @Input() public cars: ICarList

    constructor(
        private readonly _carsFacade: CarsFacade,
        private readonly _messageService: MessageService
    ) { }

    public ngOnChanges(): void {

        this.items = this.cars?.items || [];
    }

    public deleteCar(carId: number): void {
        this._carsFacade.deleteCar(carId).subscribe(_ => {
            this.items = this.items.filter(item => item.id !== carId);
            this._messageService.add({ severity: 'success', summary: 'Success', detail: 'The car was successfully removed.' })
        });
    }
}