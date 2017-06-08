import { OutletDirective } from './../outlet.directive';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-aside-container',
  templateUrl: './aside-container.component.html',
  styleUrls: ['./aside-container.component.css']
})
export class AsideContainerComponent implements OnInit {

  @ViewChild(OutletDirective) outlet: OutletDirective;

  constructor() { }

  show() {
    //this.outlet.attach();
  }

  hide() {
    this.outlet.detach();
  }

  ngOnInit() {
  }

}
