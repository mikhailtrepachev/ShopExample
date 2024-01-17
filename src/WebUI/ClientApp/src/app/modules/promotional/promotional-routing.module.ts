import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromotionalPage } from "./pages/promotional-list/promotional-page.component";

const routes: Routes = [
    {
        path: '',
        component: PromotionalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PromotionalRoutingModule { }