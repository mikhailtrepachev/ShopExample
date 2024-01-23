import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LucideAngularModule, Trash, Pencil, Plus, Car } from "lucide-angular";
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

export { HttpService } from './services/http.service'

@NgModule ({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        LucideAngularModule.pick({ Trash, Pencil, Plus, Car }),
        ReactiveFormsModule,
        ToastModule,
        MessagesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        LucideAngularModule,
        ReactiveFormsModule,
        ToastModule,
        MessagesModule
    ],
    providers: [
        
    ]
})

export class SharedModule { }