import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICarForm } from "../../models/car-form.model";
import { CarsFacade } from "../../cars.facade";
import { Subscription } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.scss'],
    providers: [MessageService]
})

export class CarFormComponent implements OnInit {
    public form: FormGroup;

    @Output() public readonly submitted = new EventEmitter<ICarForm>();
    @Output() public readonly cancelled = new EventEmitter();

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _messageService: MessageService
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
            this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Please provide all information about the car.' })
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

        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'The car was successfully added.' })
    }

    public onCancel(): void {
        this.cancelled.emit();
    }
}