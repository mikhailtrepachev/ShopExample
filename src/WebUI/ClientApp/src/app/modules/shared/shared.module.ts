import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LucideAngularModule, Trash, Pencil } from "lucide-angular";

export { HttpService } from './services/http.service'

@NgModule ({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        LucideAngularModule.pick({ Trash, Pencil })
    ],
    exports: [
        CommonModule,
        FormsModule,
        LucideAngularModule
    ],
    providers: [
        
    ]
})

export class SharedModule { }