import { Injectable } from "@angular/core";
import { OrderService } from "./services/order.service";

@Injectable({
    providedIn: 'root'
})

export class OrderFacade { 
    constructor(private readonly _orderService: OrderService) {

    }


}