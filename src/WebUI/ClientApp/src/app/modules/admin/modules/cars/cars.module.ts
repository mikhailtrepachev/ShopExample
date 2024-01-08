import { NgModule } from "@angular/core";
import { CarListPageComponent } from "./pages/car-list/car-list-page.component";
import { CarsRoutingModule } from "./cars-routing.module";
import { CarsFacade } from "./cars.facade";
import { CarListComponent } from "./components/car-list/car-list.component";
import { CarsService } from "./services/cars.service";

@NgModule({
    declarations: [
        CarListPageComponent,
        CarListComponent
    ],
    imports: [
        CarsRoutingModule
    ],
    providers: [
        CarsFacade,
        CarsService
    ]
})

export class CarsModule { }