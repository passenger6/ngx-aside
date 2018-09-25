import {
  Component,
  ViewChild
} from '@angular/core';
import { NgxAsideComponent } from 'projects/ngx-aside/src/lib/aside.component';


@Component({
  selector: 'na-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('NgxAsidePanelRight') ngxAsidePanelRight: NgxAsideComponent;

  onSave() {
    this.ngxAsidePanelRight.hide();
  }

  onCancel() {
    this.ngxAsidePanelRight.hide();
  }
}
