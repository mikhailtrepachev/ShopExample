import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "app/app-routing.module";

const rotes: Routes = [

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AutoRoutingModule { }