import {
  Component,
  Input,
  ViewContainerRef,
  Output,
  EventEmitter,
  ComponentRef,
  HostBinding,
  OnInit,
  HostListener,
  ComponentFactoryResolver
} from '@angular/core';

import { NgxOverlayComponent } from './overlay.component';
import { slideAnimations } from './aside.animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [slideAnimations]
})

/*

 TODO: Configurable parameters
 width
 max-width

 TODO: @OutputEvents
 @OutputFunctions ?

 ----

 */

export class NgxAsideComponent {

  @Output() public cancel: EventEmitter<any> = new EventEmitter();
  @Output() public submit: EventEmitter<any> = new EventEmitter();

  @Input() public position = 'right';
  @Input() public showOverlay = true;
  @Input() public closeOnEscape = true;

  @Input() public showDefaultFooter = true;
  @Input() public showDefaultHeader = true;

  @Input() public title = '';
  @Input() public cancelButtonTitle = 'Cancel';
  @Input() public submitButtonTitle = 'Submit';

  public visibleStatus = false;
  private rootViewContainerRef: ViewContainerRef;
  private backdrop: ComponentRef<{}>;

  constructor(private _resolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) {
    this.rootViewContainerRef = vcRef;
  }

  public hideAside(event) {
    if (this.cancel.observers.length > 0) {
      this.cancel.emit(event);
    } else { // If we don`t have any subscribers
      this.hide();
    }

  }

  public submitAside(event) {
    if (this.cancel.observers.length > 0) {
      this.submit.emit();
    } else {  // If we don`t have any subscribers
      this.hide();

    }
  }

  @HostListener('document:keydown.esc', ['$event'])
  public handleEscape(event) {

    if (this.closeOnEscape) {
      event.preventDefault();
      this.hideAside(event);
    }

    return false;
  }

  public hide() {

    this.visibleStatus = false;

    if (!this.backdrop) {
      return;
    }

    this.backdrop.destroy();
    this.backdrop = void 0;

  }

  public show() {
    this.visibleStatus = true;
    this.addOverlay();
  }

  private addOverlay() {
    if (!this.backdrop && this.showOverlay) {
      const OverlayComponentFactory = this._resolver.resolveComponentFactory(NgxOverlayComponent);
      this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
    }
  }
}
