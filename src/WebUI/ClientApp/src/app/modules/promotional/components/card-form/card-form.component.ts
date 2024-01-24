import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { IPersonalCarListItem } from "../../models/personal-car-list-item.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICardForm } from "../../models/card.model";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss'],
    providers: [MessageService]
})

export class CardFormComponent implements OnChanges {
    @Input() public selectedPersonalCar: IPersonalCarListItem;

    @Output() public readonly submitted = new EventEmitter<ICardForm>();

    public form: FormGroup;

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _messageService: MessageService) {
    }

    public ngOnChanges(): void {
        this.form = this._formBuilder.group({
            price: [null, Validators.required],
            description: [null]
        });

    }

    public onSubmit(): void {

        this.form.markAllAsTouched();

        if(!this.form.valid) {
            return;
        }

        const { price, description } = this.form.value;
        
        var personalCarId = this.selectedPersonalCar.id;

        this.submitted.emit({
            price,
            personalCarId,
            description
        } as ICardForm );

        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Your ad has been successfully published!' })
    }


}