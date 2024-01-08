import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject } from "@angular/core";
import * as QueryString from "qs";
import { Observable, throwError } from "rxjs";

export abstract class HttpService {
    constructor(
        protected _httpClient: HttpClient,
        @Inject('BASE_URL') protected _baseUrl: string
    ) { }

    protected handleError(res: HttpErrorResponse | any): Observable<never> {
        console.error(res.error || res.body.error);
        return throwError(res.error || 'Server error');
    }

    protected parseToQueryString(object: any): string {
        return QueryString.stringify(object);
    }
}