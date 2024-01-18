import { NgModule } from "@angular/core";
import { PromotionalRoutingModule } from "./promotional-routing.module";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { PromotionalFacade } from "./promotional.facade";
import { PromotionalPageComponent } from "./pages/promotional-list/promotional-page.component";
import { PromotionalAddPageComponent } from "./pages/promotional-add/promotional-add-page.component";
import { CarSelectorComponent } from "./components/car-selector/car-selector.component";

@NgModule({
    declarations: [
        PromotionalPageComponent,
        PromotionalAddPageComponent,
        CarSelectorComponent
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