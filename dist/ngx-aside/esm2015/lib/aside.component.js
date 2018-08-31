/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewContainerRef, Output, EventEmitter, HostListener, ComponentFactoryResolver } from '@angular/core';
import { NgxOverlayComponent } from './overlay.component';
import { slideAnimations } from './aside.animations';
/*

 TODO: Configurable parameters
 width
 max-width

 TODO: @OutputEvents
 @OutputFunctions ?

 ----

 */
export class NgxAsideComponent {
    /**
     * @param {?} _resolver
     * @param {?} vcRef
     */
    constructor(_resolver, vcRef) {
        this._resolver = _resolver;
        this.vcRef = vcRef;
        this.cancel = new EventEmitter();
        this.submit = new EventEmitter();
        this.position = 'right';
        this.showOverlay = true;
        this.closeOnEscape = true;
        this.showDefaultFooter = true;
        this.showDefaultHeader = true;
        this.title = '';
        this.cancelButtonTitle = 'Cancel';
        this.submitButtonTitle = 'Submit';
        this.visibleStatus = false;
        this.rootViewContainerRef = vcRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hideAside(event) {
        if (this.cancel.observers.length > 0) {
            this.cancel.emit(event);
        }
        else {
            // If we don`t have any subscribers
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    submitAside(event) {
        if (this.cancel.observers.length > 0) {
            this.submit.emit();
        }
        else {
            // If we don`t have any subscribers
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEscape(event) {
        if (this.closeOnEscape) {
            event.preventDefault();
            this.hideAside(event);
        }
        return false;
    }
    /**
     * @return {?}
     */
    hide() {
        this.visibleStatus = false;
        if (!this.backdrop) {
            return;
        }
        this.backdrop.destroy();
        this.backdrop = void 0;
    }
    /**
     * @return {?}
     */
    show() {
        this.visibleStatus = true;
        this.addOverlay();
    }
    /**
     * @return {?}
     */
    addOverlay() {
        if (!this.backdrop && this.showOverlay) {
            /** @type {?} */
            const OverlayComponentFactory = this._resolver.resolveComponentFactory(NgxOverlayComponent);
            this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
        }
    }
}
NgxAsideComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-aside',
                template: `<aside [@slide]="position" *ngIf="visibleStatus" [className]="position">

    <!-- Custom Header -->
    <ng-content *ngIf="!showDefaultHeader" class="aside-title-huj" select="header">


    </ng-content>
    <!-- End Custom Header -->


    <!-- Default Header -->
    <header *ngIf="showDefaultHeader">
        <div class="aside-title">
            {{title}}
        </div>

        <div (click)="hideAside($event)" class="aside-button-close">
            &times;
        </div>

    </header>
    <!-- End Custom Header -->


    <section>
        <div class="aside-container">
            <ng-content></ng-content>
        </div>
    </section>

    <!-- Custom Footer -->
    <ng-content *ngIf="!showDefaultFooter" select="footer"></ng-content>
    <!-- End Custom Footer -->

    <!-- Default Footer -->
    <footer *ngIf="showDefaultFooter">

        <button (click)="hideAside($event)" type="button" class="btn btn-secondary btn-cancel">
         {{cancelButtonTitle}}</button>

        <button (click)="submitAside($event)" type="button" class="btn btn-primary btn-submit">{{submitButtonTitle}}</button>


    </footer>
    <!--End  Default Footer -->

</aside>
`,
                styles: [`:host *{box-sizing:border-box}:host aside.right{right:0;top:0;bottom:0}:host aside.left{left:0;top:0;bottom:0}aside{will-change:opacity;display:flex;flex-direction:column;align-items:stretch;position:fixed;width:auto;max-width:50%;background-color:#fff;z-index:2;box-shadow:-6px 3px 11px 0 rgba(0,0,0,.23);padding:0 16px;height:100vh}section{overflow:auto;flex-grow:1}header{font-size:20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:64px;flex-shrink:0}header .aside-button-close{width:20px;text-align:center;opacity:.8}header .aside-button-close:hover{cursor:pointer;opacity:1}footer{flex-shrink:0;border-top:1px solid #e5e5e5;display:flex;align-items:flex-start;padding:16px 0}footer button{margin-right:6px}.left footer{justify-content:flex-end}.right footer{justify-content:flex-start}:host.left aside{box-shadow:6px -1px 11px 0 rgba(0,0,0,.23)}:host.left.footer{justify-content:flex-end}`],
                animations: [slideAnimations]
            },] },
];
/** @nocollapse */
NgxAsideComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
NgxAsideComponent.propDecorators = {
    cancel: [{ type: Output }],
    submit: [{ type: Output }],
    position: [{ type: Input }],
    showOverlay: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    showDefaultFooter: [{ type: Input }],
    showDefaultHeader: [{ type: Input }],
    title: [{ type: Input }],
    cancelButtonTitle: [{ type: Input }],
    submitButtonTitle: [{ type: Input }],
    handleEscape: [{ type: HostListener, args: ['document:keydown.esc', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxAsideComponent.prototype.cancel;
    /** @type {?} */
    NgxAsideComponent.prototype.submit;
    /** @type {?} */
    NgxAsideComponent.prototype.position;
    /** @type {?} */
    NgxAsideComponent.prototype.showOverlay;
    /** @type {?} */
    NgxAsideComponent.prototype.closeOnEscape;
    /** @type {?} */
    NgxAsideComponent.prototype.showDefaultFooter;
    /** @type {?} */
    NgxAsideComponent.prototype.showDefaultHeader;
    /** @type {?} */
    NgxAsideComponent.prototype.title;
    /** @type {?} */
    NgxAsideComponent.prototype.cancelButtonTitle;
    /** @type {?} */
    NgxAsideComponent.prototype.submitButtonTitle;
    /** @type {?} */
    NgxAsideComponent.prototype.visibleStatus;
    /** @type {?} */
    NgxAsideComponent.prototype.rootViewContainerRef;
    /** @type {?} */
    NgxAsideComponent.prototype.backdrop;
    /** @type {?} */
    NgxAsideComponent.prototype._resolver;
    /** @type {?} */
    NgxAsideComponent.prototype.vcRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFzaWRlLyIsInNvdXJjZXMiOlsibGliL2FzaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixZQUFZLEVBSVosWUFBWSxFQUNaLHdCQUF3QixFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7Ozs7Ozs7Ozs7OztBQW9FQSxNQUFNOzs7OztJQW9CSixZQUFvQixTQUFtQyxFQUFVLEtBQXVCO1FBQXBFLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7c0JBbEIzQyxJQUFJLFlBQVksRUFBRTtzQkFDbEIsSUFBSSxZQUFZLEVBQUU7d0JBRXBDLE9BQU87MkJBQ0osSUFBSTs2QkFDRixJQUFJO2lDQUVBLElBQUk7aUNBQ0osSUFBSTtxQkFFaEIsRUFBRTtpQ0FDVSxRQUFRO2lDQUNSLFFBQVE7NkJBRXJCLEtBQUs7UUFLMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztLQUNuQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBSztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiOzs7Ozs7SUFJSSxXQUFXLENBQUMsS0FBSztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBRWI7Ozs7OztJQUlJLFlBQVksQ0FBQyxLQUFLO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7O0lBRU0sSUFBSTtRQUVULElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Ozs7O0lBSWxCLElBQUk7UUFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7O0lBR1osVUFBVTtRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBQ3ZDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2Rjs7OztZQS9JSixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0NYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHE3QkFBcTdCLENBQUM7Z0JBQy83QixVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDOUI7Ozs7WUEzREMsd0JBQXdCO1lBUHhCLGdCQUFnQjs7O3FCQW1GZixNQUFNO3FCQUNOLE1BQU07dUJBRU4sS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBRUwsS0FBSztnQ0FDTCxLQUFLO29CQUVMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQTRCTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uSW5pdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vYXNpZGUuYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUnLFxyXG4gIHRlbXBsYXRlOiBgPGFzaWRlIFtAc2xpZGVdPVwicG9zaXRpb25cIiAqbmdJZj1cInZpc2libGVTdGF0dXNcIiBbY2xhc3NOYW1lXT1cInBvc2l0aW9uXCI+XHJcblxyXG4gICAgPCEtLSBDdXN0b20gSGVhZGVyIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRIZWFkZXJcIiBjbGFzcz1cImFzaWRlLXRpdGxlLWh1alwiIHNlbGVjdD1cImhlYWRlclwiPlxyXG5cclxuXHJcbiAgICA8L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxyXG5cclxuXHJcbiAgICA8IS0tIERlZmF1bHQgSGVhZGVyIC0tPlxyXG4gICAgPGhlYWRlciAqbmdJZj1cInNob3dEZWZhdWx0SGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIGNsYXNzPVwiYXNpZGUtYnV0dG9uLWNsb3NlXCI+XHJcbiAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XHJcblxyXG5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwhLS0gQ3VzdG9tIEZvb3RlciAtLT5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0Rm9vdGVyXCIgc2VsZWN0PVwiZm9vdGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEZvb3RlciAtLT5cclxuXHJcbiAgICA8IS0tIERlZmF1bHQgRm9vdGVyIC0tPlxyXG4gICAgPGZvb3RlciAqbmdJZj1cInNob3dEZWZhdWx0Rm9vdGVyXCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWNhbmNlbFwiPlxyXG4gICAgICAgICB7e2NhbmNlbEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic3VibWl0QXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc3VibWl0XCI+e3tzdWJtaXRCdXR0b25UaXRsZX19PC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPCEtLUVuZCAgRGVmYXVsdCBGb290ZXIgLS0+XHJcblxyXG48L2FzaWRlPlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCBhc2lkZS5yaWdodHtyaWdodDowO3RvcDowO2JvdHRvbTowfTpob3N0IGFzaWRlLmxlZnR7bGVmdDowO3RvcDowO2JvdHRvbTowfWFzaWRle3dpbGwtY2hhbmdlOm9wYWNpdHk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOmF1dG87bWF4LXdpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoyO2JveC1zaGFkb3c6LTZweCAzcHggMTFweCAwIHJnYmEoMCwwLDAsLjIzKTtwYWRkaW5nOjAgMTZweDtoZWlnaHQ6MTAwdmh9c2VjdGlvbntvdmVyZmxvdzphdXRvO2ZsZXgtZ3JvdzoxfWhlYWRlcntmb250LXNpemU6MjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDo2NHB4O2ZsZXgtc2hyaW5rOjB9aGVhZGVyIC5hc2lkZS1idXR0b24tY2xvc2V7d2lkdGg6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjtvcGFjaXR5Oi44fWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3NlOmhvdmVye2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1mb290ZXJ7ZmxleC1zaHJpbms6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTZweCAwfWZvb3RlciBidXR0b257bWFyZ2luLXJpZ2h0OjZweH0ubGVmdCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5yaWdodCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QubGVmdCBhc2lkZXtib3gtc2hhZG93OjZweCAtMXB4IDExcHggMCByZ2JhKDAsMCwwLC4yMyl9Omhvc3QubGVmdC5mb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFuaW1hdGlvbnNdXHJcbn0pXHJcblxyXG4vKlxyXG5cclxuIFRPRE86IENvbmZpZ3VyYWJsZSBwYXJhbWV0ZXJzXHJcbiB3aWR0aFxyXG4gbWF4LXdpZHRoXHJcblxyXG4gVE9ETzogQE91dHB1dEV2ZW50c1xyXG4gQE91dHB1dEZ1bmN0aW9ucyA/XHJcblxyXG4gLS0tLVxyXG5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEhlYWRlciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxCdXR0b25UaXRsZSA9ICdDYW5jZWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWJtaXRCdXR0b25UaXRsZSA9ICdTdWJtaXQnO1xyXG5cclxuICBwdWJsaWMgdmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcm9vdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdWJtaXQuZW1pdCgpO1xyXG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgaGFuZGxlRXNjYXBlKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmhpZGVBc2lkZShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKSB7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmFja2Ryb3AgPSB2b2lkIDA7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coKSB7XHJcbiAgICB0aGlzLnZpc2libGVTdGF0dXMgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZE92ZXJsYXkoKSB7XHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xyXG4gICAgICBjb25zdCBPdmVybGF5Q29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5neE92ZXJsYXlDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoT3ZlcmxheUNvbXBvbmVudEZhY3RvcnksIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=