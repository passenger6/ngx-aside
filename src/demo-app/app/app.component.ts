import {
    Component,
    ViewChild
} from '@angular/core';
import { NgxAsideComponent } from '../../lib/aside/aside.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('NgxAsidePanelRight') ngxAsidePanelRight: NgxAsideComponent;

    onSave () {


        this.ngxAsidePanelRight.hide();
    }

    onCancel () {

        this.ngxAsidePanelRight.hide();
    }
}
