import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromotionalPageComponent } from "./pages/promotional-list/promotional-page.component";
import { PromotionalAddPageComponent } from "./pages/promotional-add/promotional-add-page.component";
import { CardFormComponent } from "./components/card-form/card-form.component";

const routes: Routes = [
    {
        path: '',
        component: PromotionalPageComponent
    },
    {
        path: 'promotional/add',
        //canActivate
        component: PromotionalAddPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PromotionalRoutingModule { }