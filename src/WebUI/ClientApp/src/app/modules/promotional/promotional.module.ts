import { NgModule } from "@angular/core";
import { PromotionalRoutingModule } from "./promotional-routing.module";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { PromotionalFacade } from "./promotional.facade";
import { PromotionalPageComponent } from "./pages/promotional-list/promotional-page.component";
import { PromotionalAddPageComponent } from "./pages/promotional-add/promotional-add-page.component";
import { CarSelectorComponent } from "./components/car-selector/car-selector.component";
import { PromotionalService } from "./services/promotional.service";
import { CardFormComponent } from "./components/card-form/card-form.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { CardDetailComponent } from "./components/card-detail/card-detail.component";
import { PromotionalDetailPage } from "./pages/promotional-detail/promotional-detail-page.component";

@NgModule({
    declarations: [
        PromotionalPageComponent,
        PromotionalAddPageComponent,
        CarSelectorComponent,
        CardFormComponent,
        CardListComponent,
        CardDetailComponent,
        PromotionalDetailPage
    ],
    imports: [
        PromotionalRoutingModule,
        CoreModule,
        SharedModule
    ],
    exports: [

    ],
    providers: [
       PromotionalFacade,
       PromotionalService
    ]
})

export class PromotionalModule { }