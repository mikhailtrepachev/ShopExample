import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LucideAngularModule, Trash, Pencil } from "lucide-angular";

export { HttpService } from './services/http.service'

@NgModule ({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        LucideAngularModule.pick({ Trash, Pencil }),
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        LucideAngularModule,
        ReactiveFormsModule
    ],
    providers: [
        
    ]
})

export class SharedModule { }