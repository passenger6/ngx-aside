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
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-aside',
                    template: "<aside [@slide]=\"position\" *ngIf=\"visibleStatus\" [className]=\"position\">\n\n    <!-- Custom Header -->\n    <ng-content *ngIf=\"!showDefaultHeader\" class=\"aside-title-huj\" select=\"header\">\n\n\n    </ng-content>\n    <!-- End Custom Header -->\n\n\n    <!-- Default Header -->\n    <header *ngIf=\"showDefaultHeader\">\n        <div class=\"aside-title\">\n            {{title}}\n        </div>\n\n        <div (click)=\"hideAside($event)\" class=\"aside-button-close\">\n            &times;\n        </div>\n\n    </header>\n    <!-- End Custom Header -->\n\n\n    <section>\n        <div class=\"aside-container\">\n            <ng-content></ng-content>\n        </div>\n    </section>\n\n    <!-- Custom Footer -->\n    <ng-content *ngIf=\"!showDefaultFooter\" select=\"footer\"></ng-content>\n    <!-- End Custom Footer -->\n\n    <!-- Default Footer -->\n    <footer *ngIf=\"showDefaultFooter\">\n\n        <button (click)=\"hideAside($event)\" type=\"button\" class=\"btn btn-secondary btn-cancel\">\n         {{cancelButtonTitle}}</button>\n\n        <button (click)=\"submitAside($event)\" type=\"button\" class=\"btn btn-primary btn-submit\">{{submitButtonTitle}}</button>\n\n\n    </footer>\n    <!--End  Default Footer -->\n\n</aside>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFzaWRlLyIsInNvdXJjZXMiOlsibGliL2FzaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixZQUFZLEVBSVosWUFBWSxFQUNaLHdCQUF3QixFQUN6QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBMEZuRCwyQkFBb0IsU0FBbUMsRUFBVSxLQUF1QjtRQUFwRSxjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO3NCQWxCM0MsSUFBSSxZQUFZLEVBQUU7c0JBQ2xCLElBQUksWUFBWSxFQUFFO3dCQUVwQyxPQUFPOzJCQUNKLElBQUk7NkJBQ0YsSUFBSTtpQ0FFQSxJQUFJO2lDQUNKLElBQUk7cUJBRWhCLEVBQUU7aUNBQ1UsUUFBUTtpQ0FDUixRQUFROzZCQUVyQixLQUFLO1FBSzFCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7S0FDbkM7Ozs7O0lBRU0scUNBQVM7Ozs7Y0FBQyxLQUFLO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7Ozs7OztJQUlJLHVDQUFXOzs7O2NBQUMsS0FBSztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBRWI7Ozs7OztJQUlJLHdDQUFZOzs7O0lBRG5CLFVBQ29CLEtBQUs7UUFFdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFTSxnQ0FBSTs7OztRQUVULElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Ozs7O0lBSWxCLGdDQUFJOzs7O1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzs7OztJQUdaLHNDQUFVOzs7O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7WUFDdkMsSUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDNUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGOzs7Z0JBL0lKLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw0dUNBK0NYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHE3QkFBcTdCLENBQUM7b0JBQy83QixVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzlCOzs7O2dCQTNEQyx3QkFBd0I7Z0JBUHhCLGdCQUFnQjs7O3lCQW1GZixNQUFNO3lCQUNOLE1BQU07MkJBRU4sS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7b0NBRUwsS0FBSztvQ0FDTCxLQUFLO3dCQUVMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLOytCQTRCTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzRCQTlIbEQ7O1NBb0ZhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25Jbml0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5neE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc2xpZGVBbmltYXRpb25zIH0gZnJvbSAnLi9hc2lkZS5hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25neC1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGA8YXNpZGUgW0BzbGlkZV09XCJwb3NpdGlvblwiICpuZ0lmPVwidmlzaWJsZVN0YXR1c1wiIFtjbGFzc05hbWVdPVwicG9zaXRpb25cIj5cclxuXHJcbiAgICA8IS0tIEN1c3RvbSBIZWFkZXIgLS0+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEhlYWRlclwiIGNsYXNzPVwiYXNpZGUtdGl0bGUtaHVqXCIgc2VsZWN0PVwiaGVhZGVyXCI+XHJcblxyXG5cclxuICAgIDwvbmctY29udGVudD5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XHJcblxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBIZWFkZXIgLS0+XHJcbiAgICA8aGVhZGVyICpuZ0lmPVwic2hvd0RlZmF1bHRIZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgY2xhc3M9XCJhc2lkZS1idXR0b24tY2xvc2VcIj5cclxuICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cclxuXHJcblxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPCEtLSBDdXN0b20gRm9vdGVyIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRGb290ZXJcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gRm9vdGVyIC0tPlxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBGb290ZXIgLS0+XHJcbiAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0RlZmF1bHRGb290ZXJcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tY2FuY2VsXCI+XHJcbiAgICAgICAgIHt7Y2FuY2VsQnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zdWJtaXRcIj57e3N1Ym1pdEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8IS0tRW5kICBEZWZhdWx0IEZvb3RlciAtLT5cclxuXHJcbjwvYXNpZGU+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0IGFzaWRlLnJpZ2h0e3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjB9Omhvc3QgYXNpZGUubGVmdHtsZWZ0OjA7dG9wOjA7Ym90dG9tOjB9YXNpZGV7d2lsbC1jaGFuZ2U6b3BhY2l0eTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2g7cG9zaXRpb246Zml4ZWQ7d2lkdGg6YXV0bzttYXgtd2lkdGg6NTAlO2JhY2tncm91bmQtY29sb3I6I2ZmZjt6LWluZGV4OjI7Ym94LXNoYWRvdzotNnB4IDNweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpO3BhZGRpbmc6MCAxNnB4O2hlaWdodDoxMDB2aH1zZWN0aW9ue292ZXJmbG93OmF1dG87ZmxleC1ncm93OjF9aGVhZGVye2ZvbnQtc2l6ZToyMHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjY0cHg7ZmxleC1zaHJpbms6MH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZXt3aWR0aDoyMHB4O3RleHQtYWxpZ246Y2VudGVyO29wYWNpdHk6Ljh9aGVhZGVyIC5hc2lkZS1idXR0b24tY2xvc2U6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eToxfWZvb3RlcntmbGV4LXNocmluazowO2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7cGFkZGluZzoxNnB4IDB9Zm9vdGVyIGJ1dHRvbnttYXJnaW4tcmlnaHQ6NnB4fS5sZWZ0IGZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnJpZ2h0IGZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH06aG9zdC5sZWZ0IGFzaWRle2JveC1zaGFkb3c6NnB4IC0xcHggMTFweCAwIHJnYmEoMCwwLDAsLjIzKX06aG9zdC5sZWZ0LmZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9YF0sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQW5pbWF0aW9uc11cclxufSlcclxuXHJcbi8qXHJcblxyXG4gVE9ETzogQ29uZmlndXJhYmxlIHBhcmFtZXRlcnNcclxuIHdpZHRoXHJcbiBtYXgtd2lkdGhcclxuXHJcbiBUT0RPOiBAT3V0cHV0RXZlbnRzXHJcbiBAT3V0cHV0RnVuY3Rpb25zID9cclxuXHJcbiAtLS0tXHJcblxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hBc2lkZUNvbXBvbmVudCB7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgQElucHV0KCkgcHVibGljIHNob3dPdmVybGF5ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2xvc2VPbkVzY2FwZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEZvb3RlciA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIHNob3dEZWZhdWx0SGVhZGVyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlID0gJyc7XHJcbiAgQElucHV0KCkgcHVibGljIGNhbmNlbEJ1dHRvblRpdGxlID0gJ0NhbmNlbCc7XHJcbiAgQElucHV0KCkgcHVibGljIHN1Ym1pdEJ1dHRvblRpdGxlID0gJ1N1Ym1pdCc7XHJcblxyXG4gIHB1YmxpYyB2aXNpYmxlU3RhdHVzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSByb290Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICBwcml2YXRlIGJhY2tkcm9wOiBDb21wb25lbnRSZWY8e30+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmID0gdmNSZWY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZUFzaWRlKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XHJcbiAgICB9IGVsc2UgeyAvLyBJZiB3ZSBkb25gdCBoYXZlIGFueSBzdWJzY3JpYmVyc1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0QXNpZGUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KCk7XHJcbiAgICB9IGVsc2UgeyAgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBoYW5kbGVFc2NhcGUoZXZlbnQpIHtcclxuXHJcbiAgICBpZiAodGhpcy5jbG9zZU9uRXNjYXBlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuaGlkZUFzaWRlKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZSgpIHtcclxuXHJcbiAgICB0aGlzLnZpc2libGVTdGF0dXMgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3ApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmFja2Ryb3AuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5iYWNrZHJvcCA9IHZvaWQgMDtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdygpIHtcclxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLmFkZE92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkT3ZlcmxheSgpIHtcclxuICAgIGlmICghdGhpcy5iYWNrZHJvcCAmJiB0aGlzLnNob3dPdmVybGF5KSB7XHJcbiAgICAgIGNvbnN0IE92ZXJsYXlDb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTmd4T3ZlcmxheUNvbXBvbmVudCk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChPdmVybGF5Q29tcG9uZW50RmFjdG9yeSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==