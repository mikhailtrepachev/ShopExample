import { Component, OnInit } from "@angular/core";
import { PromotionalFacade } from "../../promotional.facade";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ICardListItem } from "../../models/card-list-item.model";
import { first, tap } from "rxjs";

@Component({
    selector: 'app-promotional-detail-page',
    templateUrl: './promotional-detail-page.component.html',
    styleUrls: ['./promotional-detail-page.component.scss']
})

export class PromotionalDetailPage implements OnInit{

    public cardId: number;
    public card: ICardListItem;

    constructor(private readonly _promotionalFacade: PromotionalFacade,
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
        ) {
    }

    public ngOnInit(): void {

        this.cardId = this._route.snapshot.params.id;
        this.loadCard(this.cardId);
    }

    private loadCard(cardId: number): void {
        this._promotionalFacade.getCard(cardId).pipe(
        ).subscribe(card => this.card = card);
    }
}