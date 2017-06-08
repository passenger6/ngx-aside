import { AsideService } from '../../lib/aside/aside.service';
import { PanelTestContentComponent } from './panel-test-content.component';
import {
    Component,
    ViewChild,
    ViewContainerRef,
    AfterContentInit
} from '@angular/core';
import { NgxAsideComponent } from '../../lib/aside/aside.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {


    @ViewChild('NgxAsidePanelRight') ngxAsidePanelRight: NgxAsideComponent;


    constructor(private _asideService: AsideService, private _vcRef: ViewContainerRef) {

    }

    onSave() {


        this.ngxAsidePanelRight.hide();
    }

    onCancel() {
        this.ngxAsidePanelRight.hide();
    }

    ngAfterContentInit(): void {
        this._asideService.init(this._vcRef);
    }

    add() {
        this._asideService.add(PanelTestContentComponent);
    }
}
