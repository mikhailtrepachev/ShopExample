import { NgModule } from "@angular/core";
import { AutoFacade } from "./auto.facade";
import { CoreModule } from "../core/core.module";
import { AutoRoutingModule } from "./auto-routing.module";

@NgModule ({
    declarations: [

    ],
    imports: [
        AutoRoutingModule,
        CoreModule
    ],
    exports: [

    ],
    providers: [
        AutoFacade
    ]
})

export class AutoModule { }