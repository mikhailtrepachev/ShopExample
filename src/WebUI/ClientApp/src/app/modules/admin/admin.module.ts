import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminFacade } from "./admin.facade";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { SharedModule } from "../shared/shared.module";

@NgModule ({
    declarations: [
        AdminLayoutComponent
    ],
    imports: [
        AdminRoutingModule,
        CoreModule,
        SharedModule
    ],
    exports: [

    ],
    providers: [
        AdminFacade
    ]
})

export class AdminModule { }