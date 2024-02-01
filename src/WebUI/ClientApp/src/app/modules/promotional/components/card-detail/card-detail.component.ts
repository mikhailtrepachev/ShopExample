import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ICardListItem } from "../../models/card-list-item.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { IOrderForm } from "../../models/order.module";

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent implements OnInit {

    @Input() public card: ICardListItem;

    @Output() public readonly submitted = new EventEmitter<IOrderForm>();


    public form: FormGroup;

    constructor(private readonly _formBuilder: FormBuilder,
        private readonly _messageService: MessageService) {    }
    
    public ngOnInit(): void {

        this.form = this._formBuilder.group({
            fullName: [null, Validators.required],
            email: [null, Validators.required],
            message: [null, Validators.required]
        });

    }

    public onSubmit(): void {

        this.form.markAllAsTouched();

        if(!this.form.valid) {
            return;
        }

        const { fullName, email, message } = this.form.value;

        this.submitted.emit({
            fullName,
            email,
            message
        } as IOrderForm );

        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Your order has been sent!' })
    }
}