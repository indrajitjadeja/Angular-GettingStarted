import { Component, Input, OnChanges } from "@angular/core";
@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    @Input() rating:number = 4;
    starWidth:number;
}