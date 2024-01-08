import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarListPageComponent } from "./pages/car-list/car-list-page.component";

const routes: Routes = [
    { path: '', component: CarListPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CarsRoutingModule { }