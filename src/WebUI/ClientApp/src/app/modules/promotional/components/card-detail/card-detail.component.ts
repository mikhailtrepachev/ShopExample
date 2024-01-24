import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ICardListItem } from "../../models/card-list-item.model";

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent implements OnChanges {

    @Input() public card: ICardListItem = null;
    
    public ngOnChanges(): void {
        console.log(this.card);
    }
}