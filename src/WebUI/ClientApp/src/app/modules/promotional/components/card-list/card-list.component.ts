import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ICardList } from "../../models/card-list.model";
import { ICardListItem } from "../../models/card-list-item.model";

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnChanges{ 
    @Input() public cards: ICardList;

    public cardListItems: ICardListItem[] = [];

    public ngOnChanges(): void {
        this.cardListItems = this.cards?.items || [];

        console.log(this.cardListItems);
    }
}