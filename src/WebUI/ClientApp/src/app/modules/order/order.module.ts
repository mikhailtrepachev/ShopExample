import { NgModule } from "@angular/core";
import { OrderListPageComponent } from "./pages/order-list/order-list-page.component";
import { OrderService } from "./services/order.service";
import { OrderFacade } from "./order.facade";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./components/order-list/order-list.component";

@NgModule({
    declarations: [
        OrderListPageComponent,
        OrderListComponent
    ],
    imports: [
        OrderRoutingModule
    ],
    exports: [

    ],
    providers: [
        OrderFacade,
        OrderService
    ]
})

export class OrderModule { }