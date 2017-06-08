import { PanelTestContentComponent } from './panel-test-content.component';
import { AsideService } from '../../lib/aside/aside.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-test-block',
    template: `
    <button class="btn btn-default hamburger" (click)="NgxAsidePanelLeft.show()">
            <span class="glyphicon glyphicon-align-justify"></span>
        </button>
    <ngx-aside #NgxAsidePanelLeft
           [position]="'left'"
           [title]="'Aside title'"
>
    <header>
        This is a header
    </header>
    <h1> Test Aside Left panel</h1>
    <code>Default configuration</code>
    <footer>
        this is a footer1
    </footer>
</ngx-aside>
`,
    styles: [`:host{
            height:200px;
            width:200px;
            background-color:green;
            overflow:hidden;
    }`]
})

export class TestComponent implements OnInit {
    constructor(private _asideService: AsideService) { }

    ngOnInit() { }
    add() {
        this._asideService.add(PanelTestContentComponent);
    }
}
