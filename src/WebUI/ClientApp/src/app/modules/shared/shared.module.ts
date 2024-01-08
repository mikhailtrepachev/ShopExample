import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

export { HttpService } from './services/http.service'

@NgModule ({
    declarations: [

    ],
    imports: [
        FormsModule
    ],
    exports: [
        FormsModule
    ],
    providers: [
        
    ]
})

export class SharedModule { }