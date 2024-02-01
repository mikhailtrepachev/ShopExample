import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpService } from "@app/modules/shared/shared.module";

@Injectable({
    providedIn: 'root'
})

export class OrderService extends HttpService {
    constructor(
        httpClient: HttpClient,
        @Inject('BASE_URL') protected _baseUrl: string
    ) { 
        super(httpClient, _baseUrl)
    }


}