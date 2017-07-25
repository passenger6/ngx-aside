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
}
    from
    "@angular/core";

import { NgxOverlayComponent } from './overlay.component';
import { slideAnimations } from './aside.animations';

@Component({
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


    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() submit: EventEmitter<any> = new EventEmitter();


    @Input() position = 'right';
    @Input() showOverlay = true;
    @Input() closeOnEscape = true;


    @Input() showDefaultFooter = true;
    @Input() showDefaultHeader = true;

    @Input() title = '';
    @Input() cancelButtonTitle = 'Cancel';
    @Input() submitButtonTitle = 'Submit';

    // @HostBinding('class') cssClasses: HostBinding;


    private backdrop: ComponentRef<{}>;
    visibleStatus: boolean = false;
    private rootViewContainerRef: ViewContainerRef;


    constructor(private _resolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) {
        this.rootViewContainerRef = vcRef;
    }



    private addOverlay() {
        if (!this.backdrop && this.showOverlay) {
            const OverlayComponentFactory = this._resolver.resolveComponentFactory(NgxOverlayComponent);
            this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
        }
    }


    hideAside(event) {
        if (this.cancel.observers.length > 0) {
            this.cancel.emit(event);
        } else { // If we don`t have any subscribers
            this.hide();
        }

    }


    submitAside() {
        if (this.cancel.observers.length > 0) {
            this.submit.emit();
        } else {  // If we don`t have any subscribers
            this.hide();

        }
    }

    @HostListener('document:keydown.esc', ['$event'])
    handleEscape(event) {

        if (this.closeOnEscape) {
            event.preventDefault();
            this.hideAside(event);
        }


        return false;
    }

    hide() {


        this.visibleStatus = false;

        if (!this.backdrop) {
            return;
        }

        this.backdrop.destroy();
        this.backdrop = void 0;

    }

    show() {
        this.visibleStatus = true;
        this.addOverlay();
    }
}
