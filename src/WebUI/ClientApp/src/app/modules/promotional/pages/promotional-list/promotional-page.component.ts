import { Component, OnInit } from "@angular/core";
import { PromotionalFacade } from "../../promotional.facade";
import { ICardList } from "../../models/card-list.model";
import { first, tap } from "rxjs";

@Component({
    selector: 'app-promotional-page',
    templateUrl: './promotional-page.component.html',
    styleUrls: ['./promotional-page.component.scss'],
})

export class PromotionalPageComponent implements OnInit{

    public cards: ICardList = null;

    constructor(
        private readonly _promotionalFacade: PromotionalFacade
    ) { }

    public ngOnInit(): void {
        this.loadCard();
    }

    private loadCard(): void {
        this._promotionalFacade.getCardList().pipe(
            first(),
            tap(card => this.cards = card)
        ).subscribe();
    }
}