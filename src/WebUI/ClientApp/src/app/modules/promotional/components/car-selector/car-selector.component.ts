import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IPersonalCarForm } from "../../models/personal-car-form.model";
import { PromotionalFacade } from "../../promotional.facade";
import { ICarList } from "../../models/car-list.model";
import { Observable } from "rxjs";
import { ICarListItem } from "../../models/car-list-item.model";

@Component({
    selector: 'app-car-selector',
    templateUrl: './car-selector.component.html',
    styleUrls: ['./car-selector.component.scss']
})

export class CarSelectorComponent implements OnChanges {
    public form: FormGroup;

    public items: ICarListItem[] = [];

    @Input() public cars: ICarList

    @Output() public readonly submitted = new EventEmitter<IPersonalCarForm>();
    @Output() public readonly cancelled = new EventEmitter();

    constructor(
        private readonly _promotionalFacade: PromotionalFacade,
        private readonly _formBuilder: FormBuilder
    ) { }

    public ngOnChanges(): void {
        this.items = this.cars?.items || [];

        this.form = this._formBuilder.group({
            id: [null],
            selectedDistributor: [null, Validators.required],
            selectedModel: [null, Validators.required],
            auto: [null, Validators.required],
            color: [null, Validators.required],
            registrationState: [null, Validators.required],
            registrationNumber: [null, Validators.required],
            technicalState: [null, Validators.required],
            wheelSize: [null, Validators.required],
            horsePower: [null, Validators.required]
        });
    }

    public onSubmit(): void {

    }

 }