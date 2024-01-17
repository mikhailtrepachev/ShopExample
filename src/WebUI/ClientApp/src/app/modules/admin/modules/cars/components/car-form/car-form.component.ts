import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICarForm } from "../../models/car-form.model";
import { CarsFacade } from "../../cars.facade";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.scss']
})

export class CarFormComponent implements OnInit {
    public form: FormGroup;

    @Output() public readonly submitted = new EventEmitter<ICarForm>();
    @Output() public readonly cancelled = new EventEmitter();

    constructor(
        private readonly _carsFacade: CarsFacade,
        private readonly _formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.form = this._formBuilder.group({
            id: [null],
            distributorName: [null, Validators.required],
            modelName: [null, Validators.required],
            issueYear: [null, Validators.required]
        });
    }

    public onSubmit(): void {
        this.form.markAsTouched();

        if(!this.form.valid) {
            console.log('not valid');
            return;
        }

        const { id, distributorName, modelName, issueYear } = this.form.value;

        this.submitted.emit({
            id,
            distributorName,
            modelName,
            issueYear
        } as ICarForm);

        this.form.markAsPristine();

        console.log('emitted')
    }

    public onCancel(): void {
        this.cancelled.emit();
    }
}