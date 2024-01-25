import { Component, Input, OnInit } from "@angular/core";
import { ICardListItem } from "../../models/card-list-item.model";

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent implements OnInit {

    @Input() public card: ICardListItem;
    
    public ngOnInit(): void {

    }
}