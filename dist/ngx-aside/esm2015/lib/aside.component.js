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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFzaWRlLyIsInNvdXJjZXMiOlsibGliL2FzaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixZQUFZLEVBSVosWUFBWSxFQUNaLHdCQUF3QixFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7Ozs7Ozs7Ozs7OztBQW9FQSxNQUFNOzs7OztJQW9CSixZQUFvQixTQUFtQyxFQUFVLEtBQXVCO1FBQXBFLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7c0JBbEIzQyxJQUFJLFlBQVksRUFBRTtzQkFDbEIsSUFBSSxZQUFZLEVBQUU7d0JBRXBDLE9BQU87MkJBQ0osSUFBSTs2QkFDRixJQUFJO2lDQUVBLElBQUk7aUNBQ0osSUFBSTtxQkFFaEIsRUFBRTtpQ0FDVSxRQUFRO2lDQUNSLFFBQVE7NkJBRXJCLEtBQUs7UUFLMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztLQUNuQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBSztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiOzs7Ozs7SUFJSSxXQUFXLENBQUMsS0FBSztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBRWI7Ozs7OztJQUlJLFlBQVksQ0FBQyxLQUFLO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7O0lBRU0sSUFBSTtRQUVULElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Ozs7O0lBSWxCLElBQUk7UUFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7O0lBR1osVUFBVTtRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBQ3ZDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2Rjs7OztZQS9JSixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0NYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHE3QkFBcTdCLENBQUM7Z0JBQy83QixVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDOUI7Ozs7WUEzREMsd0JBQXdCO1lBUHhCLGdCQUFnQjs7O3FCQW1GZixNQUFNO3FCQUNOLE1BQU07dUJBRU4sS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBRUwsS0FBSztnQ0FDTCxLQUFLO29CQUVMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQTRCTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29tcG9uZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgc2xpZGVBbmltYXRpb25zIH0gZnJvbSAnLi9hc2lkZS5hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUnLFxuICB0ZW1wbGF0ZTogYDxhc2lkZSBbQHNsaWRlXT1cInBvc2l0aW9uXCIgKm5nSWY9XCJ2aXNpYmxlU3RhdHVzXCIgW2NsYXNzTmFtZV09XCJwb3NpdGlvblwiPlxuXG4gICAgPCEtLSBDdXN0b20gSGVhZGVyIC0tPlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0SGVhZGVyXCIgY2xhc3M9XCJhc2lkZS10aXRsZS1odWpcIiBzZWxlY3Q9XCJoZWFkZXJcIj5cblxuXG4gICAgPC9uZy1jb250ZW50PlxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XG5cblxuICAgIDwhLS0gRGVmYXVsdCBIZWFkZXIgLS0+XG4gICAgPGhlYWRlciAqbmdJZj1cInNob3dEZWZhdWx0SGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS10aXRsZVwiPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgY2xhc3M9XCJhc2lkZS1idXR0b24tY2xvc2VcIj5cbiAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8IS0tIEN1c3RvbSBGb290ZXIgLS0+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRGb290ZXJcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPCEtLSBFbmQgQ3VzdG9tIEZvb3RlciAtLT5cblxuICAgIDwhLS0gRGVmYXVsdCBGb290ZXIgLS0+XG4gICAgPGZvb3RlciAqbmdJZj1cInNob3dEZWZhdWx0Rm9vdGVyXCI+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tY2FuY2VsXCI+XG4gICAgICAgICB7e2NhbmNlbEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zdWJtaXRcIj57e3N1Ym1pdEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cblxuXG4gICAgPC9mb290ZXI+XG4gICAgPCEtLUVuZCAgRGVmYXVsdCBGb290ZXIgLS0+XG5cbjwvYXNpZGU+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcbiAgYW5pbWF0aW9uczogW3NsaWRlQW5pbWF0aW9uc11cbn0pXG5cbi8qXG5cbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xuIHdpZHRoXG4gbWF4LXdpZHRoXG5cbiBUT0RPOiBAT3V0cHV0RXZlbnRzXG4gQE91dHB1dEZ1bmN0aW9ucyA/XG5cbiAtLS0tXG5cbiAqL1xuXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgcHVibGljIHN1Ym1pdEJ1dHRvblRpdGxlID0gJ1N1Ym1pdCc7XG5cbiAgcHVibGljIHZpc2libGVTdGF0dXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSByb290Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xuICB9XG5cbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KCk7XG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xuXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaGlkZUFzaWRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcblxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgdGhpcy5iYWNrZHJvcCA9IHZvaWQgMDtcblxuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmFkZE92ZXJsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChPdmVybGF5Q29tcG9uZW50RmFjdG9yeSwgMCk7XG4gICAgfVxuICB9XG59XG4iXX0=