import { NgModule } from "@angular/core";
import { PromotionalRoutingModule } from "./promotional-routing.module";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { PromotionalFacade } from "./promotional.facade";
import { PromotionalPage } from "./pages/promotional-list/promotional-page.component";

@NgModule({
    declarations: [
        PromotionalPage
    ],
    imports: [
        PromotionalRoutingModule,
        CoreModule,
        SharedModule
    ],
    exports: [

    ],
    providers: [
       PromotionalFacade
    ]
})

export class PromotionalModule { }