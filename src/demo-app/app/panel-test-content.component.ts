import { AsideService } from '../../lib/aside/aside.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'panel-test-content',
    template: `Hallo i am panel-test-content huj<button (click)="_asideService.hide()"> Close</button>
            <hr>
            <button (click)="add()">Addd panel</button>
            <button (click)="_asideService.slide()">Sldie</button>

    `
})

export class PanelTestContentComponent implements OnInit {
    constructor(private _asideService: AsideService) { }

    ngOnInit() { }
    add() {
        this._asideService.add(PanelTestContentComponent);
    }
}
