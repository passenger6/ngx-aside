/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewContainerRef, Output, EventEmitter, HostListener, ComponentFactoryResolver } from '@angular/core';
import { NgxOverlayComponent } from './overlay.component';
import { slideAnimations } from './aside.animations';
var NgxAsideComponent = /** @class */ (function () {
    function NgxAsideComponent(_resolver, vcRef) {
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
    NgxAsideComponent.prototype.hideAside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.cancel.observers.length > 0) {
            this.cancel.emit(event);
        }
        else {
            // If we don`t have any subscribers
            this.hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxAsideComponent.prototype.submitAside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.cancel.observers.length > 0) {
            this.submit.emit();
        }
        else {
            // If we don`t have any subscribers
            this.hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxAsideComponent.prototype.handleEscape = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnEscape) {
            event.preventDefault();
            this.hideAside(event);
        }
        return false;
    };
    /**
     * @return {?}
     */
    NgxAsideComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.visibleStatus = false;
        if (!this.backdrop) {
            return;
        }
        this.backdrop.destroy();
        this.backdrop = void 0;
    };
    /**
     * @return {?}
     */
    NgxAsideComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.visibleStatus = true;
        this.addOverlay();
    };
    /**
     * @return {?}
     */
    NgxAsideComponent.prototype.addOverlay = /**
     * @return {?}
     */
    function () {
        if (!this.backdrop && this.showOverlay) {
            /** @type {?} */
            var OverlayComponentFactory = this._resolver.resolveComponentFactory(NgxOverlayComponent);
            this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
        }
    };
    NgxAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-aside',
                    template: "<aside [@slide]=\"position\" *ngIf=\"visibleStatus\" [className]=\"position\">\n\n    <!-- Custom Header -->\n    <ng-content *ngIf=\"!showDefaultHeader\" class=\"aside-title-huj\" select=\"header\">\n\n\n    </ng-content>\n    <!-- End Custom Header -->\n\n\n    <!-- Default Header -->\n    <header *ngIf=\"showDefaultHeader\">\n        <div class=\"aside-title\">\n            {{title}}\n        </div>\n\n        <div (click)=\"hideAside($event)\" class=\"aside-button-close\">\n            &times;\n        </div>\n\n    </header>\n    <!-- End Custom Header -->\n\n\n    <section>\n        <div class=\"aside-container\">\n            <ng-content></ng-content>\n        </div>\n    </section>\n\n    <!-- Custom Footer -->\n    <ng-content *ngIf=\"!showDefaultFooter\" select=\"footer\"></ng-content>\n    <!-- End Custom Footer -->\n\n    <!-- Default Footer -->\n    <footer *ngIf=\"showDefaultFooter\">\n\n        <button (click)=\"hideAside($event)\" type=\"button\" class=\"btn btn-secondary btn-cancel\">\n         {{cancelButtonTitle}}</button>\n\n        <button (click)=\"submitAside($event)\" type=\"button\" class=\"btn btn-primary btn-submit\">{{submitButtonTitle}}</button>\n\n\n    </footer>\n    <!--End  Default Footer -->\n\n</aside>",
                    styles: [":host *{box-sizing:border-box}:host aside.right{right:0;top:0;bottom:0}:host aside.left{left:0;top:0;bottom:0}aside{will-change:opacity;display:flex;flex-direction:column;align-items:stretch;position:fixed;width:auto;max-width:50%;background-color:#fff;z-index:2;box-shadow:-6px 3px 11px 0 rgba(0,0,0,.23);padding:0 16px;height:100vh}section{overflow:auto;flex-grow:1}header{font-size:20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:64px;flex-shrink:0}header .aside-button-close{width:20px;text-align:center;opacity:.8}header .aside-button-close:hover{cursor:pointer;opacity:1}footer{flex-shrink:0;border-top:1px solid #e5e5e5;display:flex;align-items:flex-start;padding:16px 0}footer button{margin-right:6px}.left footer{justify-content:flex-end}.right footer{justify-content:flex-start}:host.left aside{box-shadow:6px -1px 11px 0 rgba(0,0,0,.23)}:host.left.footer{justify-content:flex-end}"],
                    animations: [slideAnimations]
                },] },
    ];
    /** @nocollapse */
    NgxAsideComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
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
    return NgxAsideComponent;
}());
export { NgxAsideComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFzaWRlLyIsInNvdXJjZXMiOlsibGliL2FzaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixZQUFZLEVBSVosWUFBWSxFQUNaLHdCQUF3QixFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBd0ZuRCwyQkFBb0IsU0FBbUMsRUFBVSxLQUF1QjtRQUFwRSxjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO3NCQWxCM0MsSUFBSSxZQUFZLEVBQUU7c0JBQ2xCLElBQUksWUFBWSxFQUFFO3dCQUVwQyxPQUFPOzJCQUNKLElBQUk7NkJBQ0YsSUFBSTtpQ0FFQSxJQUFJO2lDQUNKLElBQUk7cUJBRWhCLEVBQUU7aUNBQ1UsUUFBUTtpQ0FDUixRQUFROzZCQUVaLEtBQUs7UUFLbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztLQUNuQzs7Ozs7SUFFTSxxQ0FBUzs7OztjQUFDLEtBQUs7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjs7Ozs7O0lBSUksdUNBQVc7Ozs7Y0FBQyxLQUFLO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FFYjs7Ozs7O0lBSUksd0NBQVk7Ozs7SUFEbkIsVUFDb0IsS0FBSztRQUV2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7OztJQUVNLGdDQUFJOzs7O1FBRVQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFJbEIsZ0NBQUk7Ozs7UUFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7O0lBR1osc0NBQVU7Ozs7UUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztZQUN2QyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkY7OztnQkE3SUosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsMHVDQThDSDtvQkFDUCxNQUFNLEVBQUUsQ0FBQyxxN0JBQXE3QixDQUFDO29CQUMvN0IsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM5Qjs7OztnQkF6REMsd0JBQXdCO2dCQVB4QixnQkFBZ0I7Ozt5QkFpRmYsTUFBTTt5QkFDTixNQUFNOzJCQUVOLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUVMLEtBQUs7b0NBQ0wsS0FBSzt3QkFFTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkE0QkwsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOzs0QkE1SGxEOztTQWtGYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uSW5pdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vYXNpZGUuYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGA8YXNpZGUgW0BzbGlkZV09XCJwb3NpdGlvblwiICpuZ0lmPVwidmlzaWJsZVN0YXR1c1wiIFtjbGFzc05hbWVdPVwicG9zaXRpb25cIj5cclxuXHJcbiAgICA8IS0tIEN1c3RvbSBIZWFkZXIgLS0+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEhlYWRlclwiIGNsYXNzPVwiYXNpZGUtdGl0bGUtaHVqXCIgc2VsZWN0PVwiaGVhZGVyXCI+XHJcblxyXG5cclxuICAgIDwvbmctY29udGVudD5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XHJcblxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBIZWFkZXIgLS0+XHJcbiAgICA8aGVhZGVyICpuZ0lmPVwic2hvd0RlZmF1bHRIZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgY2xhc3M9XCJhc2lkZS1idXR0b24tY2xvc2VcIj5cclxuICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cclxuXHJcblxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPCEtLSBDdXN0b20gRm9vdGVyIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRGb290ZXJcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gRm9vdGVyIC0tPlxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBGb290ZXIgLS0+XHJcbiAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0RlZmF1bHRGb290ZXJcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tY2FuY2VsXCI+XHJcbiAgICAgICAgIHt7Y2FuY2VsQnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zdWJtaXRcIj57e3N1Ym1pdEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8IS0tRW5kICBEZWZhdWx0IEZvb3RlciAtLT5cclxuXHJcbjwvYXNpZGU+YCxcclxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbmltYXRpb25zXVxyXG59KVxyXG5cclxuLypcclxuXHJcbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xyXG4gd2lkdGhcclxuIG1heC13aWR0aFxyXG5cclxuIFRPRE86IEBPdXRwdXRFdmVudHNcclxuIEBPdXRwdXRGdW5jdGlvbnMgP1xyXG5cclxuIC0tLS1cclxuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIE5neEFzaWRlQ29tcG9uZW50IHtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd092ZXJsYXkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dEZWZhdWx0Rm9vdGVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcclxuICBASW5wdXQoKSBwdWJsaWMgc3VibWl0QnV0dG9uVGl0bGUgPSAnU3VibWl0JztcclxuXHJcbiAgcHVibGljIHZpc2libGVTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHJvb3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIHByaXZhdGUgYmFja2Ryb3A6IENvbXBvbmVudFJlZjx7fT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYgPSB2Y1JlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlQXNpZGUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7IC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJtaXRBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQoKTtcclxuICAgIH0gZWxzZSB7ICAvLyBJZiB3ZSBkb25gdCBoYXZlIGFueSBzdWJzY3JpYmVyc1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlT25Fc2NhcGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5oaWRlQXNpZGUoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCkge1xyXG5cclxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmJhY2tkcm9wID0gdm9pZCAwO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KCkge1xyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRkT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRPdmVybGF5KCkge1xyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wICYmIHRoaXMuc2hvd092ZXJsYXkpIHtcclxuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KE92ZXJsYXlDb21wb25lbnRGYWN0b3J5LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19