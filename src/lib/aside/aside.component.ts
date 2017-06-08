import { AsideContainerComponent } from './aside-container/aside-container.component';
import { OutletDirective } from './outlet.directive';
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
    ComponentFactoryResolver,
    ViewChild,
    AfterViewInit,
    AfterContentInit,
    Renderer2,
    ElementRef,
    ContentChild
} from '@angular/core';

import { NgxOverlayComponent } from './overlay.component';
import { leftSideAnimations, rightideAnimations } from './aside.animations';

@Component({
    selector: 'ngx-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss'],
    animations: [leftSideAnimations, rightideAnimations]
})

/*

 TODO: Configurable parameters
 width
 max-width


 TODO: @OutputEvents
 @OutputFunctions ?

 ----

 */

export class NgxAsideComponent implements OnInit {


    @ViewChild(OutletDirective) outlet: OutletDirective;


    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() submit: EventEmitter<any> = new EventEmitter();


    @Input() position = 'right';
    @Input() showOverlay = true;
    @Input() closeOnEscape = true;

    @HostBinding('class') cssClasses: HostBinding;


    private backdrop: ComponentRef<{}>;
    private rootViewContainerRef: ViewContainerRef;
    public position_animation = '';
    private animationInProgress = false;



    constructor(private _resolver: ComponentFactoryResolver,
        private vcRef: ViewContainerRef,
        private _elementRef: ElementRef,
        private _renederer: Renderer2) {
        this.rootViewContainerRef = vcRef;
    }

    ngAfterContentInit(): void {
        //  this._asideService.init(this.rootViewContainerRef);
    }



    ngOnInit() {
        this.cssClasses = this.position;
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

    animationDone($event, type) {

        if ($event.toState === 'hide' && type === this.position) {
            this.outlet.detach();
        }
        this.animationInProgress = false;
    }

    animationStarted(event) {
        this.animationInProgress = true;
    }

    hide() {
        this.position_animation = 'hide';
        if (!this.backdrop) {
            return;
        }
        this.backdrop.destroy();
        this.backdrop = void 0;

    }

    show() {
        console.log('this.animationInProgress', this.animationInProgress);
        if (this.animationInProgress) {
            return;
        }
        this.position_animation = this.position;
        this.addOverlay();
    }

    slide() {
        debugger;
        this._renederer.setStyle(this.outlet, `width`, `20px`);
    }
}
