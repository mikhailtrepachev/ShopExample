import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromotionalPageComponent } from "./pages/promotional-list/promotional-page.component";
import { PromotionalAddPageComponent } from "./pages/promotional-add/promotional-add-page.component";
import { CardFormComponent } from "./components/card-form/card-form.component";
import { PromotionalDetailPage } from "./pages/promotional-detail/promotional-detail-page.component";
import { AuthorizeGuard } from "api-authorization/authorize.guard";

const routes: Routes = [
    {
        path: '',
        component: PromotionalPageComponent
    },
    {
        path: 'promotional/add',
        canActivate: [AuthorizeGuard],
        component: PromotionalAddPageComponent
    },
    {
        path: 'promotional/detail/:id',
        component: PromotionalDetailPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PromotionalRoutingModule { }