import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { 
                path: 'cars',
                //canActivate,
                loadChildren: () => import('@app/modules/admin/modules/cars/cars.module').then(m => m.CarsModule),
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }