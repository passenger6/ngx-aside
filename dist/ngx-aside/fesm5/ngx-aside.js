import { Component, Input, ViewContainerRef, Output, EventEmitter, HostListener, ComponentFactoryResolver, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxOverlayComponent = /** @class */ (function () {
    function NgxOverlayComponent() {
        this.showStatus = true;
    }
    NgxOverlayComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-aside-overlay',
                    template: "\n        <div class=\"overlay\" [@show]=\"showStatus\"></div>",
                    styles: [".overlay {\n        z-index: 1;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: currentColor;\n        opacity: .6;\n    }"],
                    animations: [
                        trigger('show', [
                            transition('void => *', [
                                style([{ opacity: 0 }]),
                                animate(100, style([{ opacity: .6 }]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxOverlayComponent.ctorParameters = function () { return []; };
    return NgxOverlayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var slideAnimations = trigger('slide', [
    transition('void => left', [
        style({
            opacity: .6,
            transform: 'translate3d(-100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)', style({
            opacity: 1,
            transform: 'translateZ(0)'
        }))
    ]),
    transition('void => right', [
        style({
            opacity: .6,
            transform: 'translate3d(100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)', style({
            opacity: 1,
            transform: 'translateZ(0)'
        }))
    ]),
    transition('left => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(-50%,0,0)'
        }))
    ]),
    transition('right => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(50%,0,0)'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxAsideModule = /** @class */ (function () {
    function NgxAsideModule() {
    }
    NgxAsideModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [NgxAsideComponent],
                    declarations: [
                        NgxAsideComponent,
                        NgxOverlayComponent,
                    ],
                    entryComponents: [NgxOverlayComponent]
                },] },
    ];
    return NgxAsideModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxAsideModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYXNpZGUvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmFuaW1hdGlvbnMudHMiLCJuZzovL25neC1hc2lkZS9saWIvYXNpZGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHRyYW5zaXRpb24sXG4gIHN0eWxlLFxuICBhbmltYXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1hc2lkZS1vdmVybGF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIiBbQHNob3ddPVwic2hvd1N0YXR1c1wiPjwvZGl2PmAsXG4gIHN0eWxlczogW2Aub3ZlcmxheSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIG9wYWNpdHk6IC42O1xuICAgIH1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Nob3cnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IDAgfV0pLFxuICAgICAgICBhbmltYXRlKDEwMCxcbiAgICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAuNiB9XSlcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4T3ZlcmxheUNvbXBvbmVudCB7XG4gIHB1YmxpYyBzaG93U3RhdHVzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hvd1N0YXR1cyA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IHNsaWRlQW5pbWF0aW9uczogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGUnLCBbXG5cbiAgdHJhbnNpdGlvbigndm9pZCA9PiBsZWZ0JywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IC42LFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTEwMCUsMCwwKSdcbiAgICB9KSxcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcbiAgICAgIH0pKVxuICBdKSxcblxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHJpZ2h0JywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IC42LFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMTAwJSwwLDApJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSknLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xuICAgICAgfSkpXG4gIF0pLFxuXG4gIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLDAsMCknXG4gICAgfVxuICAgICkpXG4gIF0pLFxuXG4gIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IHZvaWQnLCBbXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNTAlLDAsMCknXG4gICAgfVxuICAgICkpXG4gIF0pXG5dKTtcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDb21wb25lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzbGlkZUFuaW1hdGlvbnMgfSBmcm9tICcuL2FzaWRlLmFuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1hc2lkZScsXG4gIHRlbXBsYXRlOiBgPGFzaWRlIFtAc2xpZGVdPVwicG9zaXRpb25cIiAqbmdJZj1cInZpc2libGVTdGF0dXNcIiBbY2xhc3NOYW1lXT1cInBvc2l0aW9uXCI+XG5cbiAgICA8IS0tIEN1c3RvbSBIZWFkZXIgLS0+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRIZWFkZXJcIiBjbGFzcz1cImFzaWRlLXRpdGxlLWh1alwiIHNlbGVjdD1cImhlYWRlclwiPlxuXG5cbiAgICA8L25nLWNvbnRlbnQ+XG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cblxuXG4gICAgPCEtLSBEZWZhdWx0IEhlYWRlciAtLT5cbiAgICA8aGVhZGVyICpuZ0lmPVwic2hvd0RlZmF1bHRIZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRpdGxlXCI+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiBjbGFzcz1cImFzaWRlLWJ1dHRvbi1jbG9zZVwiPlxuICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvaGVhZGVyPlxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDwhLS0gQ3VzdG9tIEZvb3RlciAtLT5cbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEZvb3RlclwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICA8IS0tIEVuZCBDdXN0b20gRm9vdGVyIC0tPlxuXG4gICAgPCEtLSBEZWZhdWx0IEZvb3RlciAtLT5cbiAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0RlZmF1bHRGb290ZXJcIj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1jYW5jZWxcIj5cbiAgICAgICAgIHt7Y2FuY2VsQnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdEFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN1Ym1pdFwiPnt7c3VibWl0QnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxuXG5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8IS0tRW5kICBEZWZhdWx0IEZvb3RlciAtLT5cblxuPC9hc2lkZT5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCBhc2lkZS5yaWdodHtyaWdodDowO3RvcDowO2JvdHRvbTowfTpob3N0IGFzaWRlLmxlZnR7bGVmdDowO3RvcDowO2JvdHRvbTowfWFzaWRle3dpbGwtY2hhbmdlOm9wYWNpdHk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOmF1dG87bWF4LXdpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoyO2JveC1zaGFkb3c6LTZweCAzcHggMTFweCAwIHJnYmEoMCwwLDAsLjIzKTtwYWRkaW5nOjAgMTZweDtoZWlnaHQ6MTAwdmh9c2VjdGlvbntvdmVyZmxvdzphdXRvO2ZsZXgtZ3JvdzoxfWhlYWRlcntmb250LXNpemU6MjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDo2NHB4O2ZsZXgtc2hyaW5rOjB9aGVhZGVyIC5hc2lkZS1idXR0b24tY2xvc2V7d2lkdGg6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjtvcGFjaXR5Oi44fWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3NlOmhvdmVye2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1mb290ZXJ7ZmxleC1zaHJpbms6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTZweCAwfWZvb3RlciBidXR0b257bWFyZ2luLXJpZ2h0OjZweH0ubGVmdCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5yaWdodCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QubGVmdCBhc2lkZXtib3gtc2hhZG93OjZweCAtMXB4IDExcHggMCByZ2JhKDAsMCwwLC4yMyl9Omhvc3QubGVmdC5mb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxuICBhbmltYXRpb25zOiBbc2xpZGVBbmltYXRpb25zXVxufSlcblxuLypcblxuIFRPRE86IENvbmZpZ3VyYWJsZSBwYXJhbWV0ZXJzXG4gd2lkdGhcbiBtYXgtd2lkdGhcblxuIFRPRE86IEBPdXRwdXRFdmVudHNcbiBAT3V0cHV0RnVuY3Rpb25zID9cblxuIC0tLS1cblxuICovXG5cbmV4cG9ydCBjbGFzcyBOZ3hBc2lkZUNvbXBvbmVudCB7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgcHVibGljIHBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgcHVibGljIHNob3dPdmVybGF5ID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEZvb3RlciA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEhlYWRlciA9IHRydWU7XG5cbiAgQElucHV0KCkgcHVibGljIHRpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxCdXR0b25UaXRsZSA9ICdDYW5jZWwnO1xuICBASW5wdXQoKSBwdWJsaWMgc3VibWl0QnV0dG9uVGl0bGUgPSAnU3VibWl0JztcblxuICBwdWJsaWMgdmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xuICBwcml2YXRlIHJvb3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIGJhY2tkcm9wOiBDb21wb25lbnRSZWY8e30+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmID0gdmNSZWY7XG4gIH1cblxuICBwdWJsaWMgaGlkZUFzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcbiAgICB9IGVsc2UgeyAvLyBJZiB3ZSBkb25gdCBoYXZlIGFueSBzdWJzY3JpYmVyc1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgc3VibWl0QXNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQoKTtcbiAgICB9IGVsc2UgeyAgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcbiAgICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxuICBwdWJsaWMgaGFuZGxlRXNjYXBlKGV2ZW50KSB7XG5cbiAgICBpZiAodGhpcy5jbG9zZU9uRXNjYXBlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5oaWRlQXNpZGUoZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuYmFja2Ryb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICB0aGlzLmJhY2tkcm9wID0gdm9pZCAwO1xuXG4gIH1cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICB0aGlzLnZpc2libGVTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMuYWRkT3ZlcmxheSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5iYWNrZHJvcCAmJiB0aGlzLnNob3dPdmVybGF5KSB7XG4gICAgICBjb25zdCBPdmVybGF5Q29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5neE92ZXJsYXlDb21wb25lbnQpO1xuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KE92ZXJsYXlDb21wb25lbnRGYWN0b3J5LCAwKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4QXNpZGVDb21wb25lbnQgfSBmcm9tICcuL2FzaWRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTmd4QXNpZGVDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hBc2lkZUNvbXBvbmVudCxcbiAgICBOZ3hPdmVybGF5Q29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOZ3hPdmVybGF5Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE5neEFzaWRlTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUF5Q0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN4Qjs7Z0JBaENGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGdFQUM2QztvQkFDdkQsTUFBTSxFQUFFLENBQUMsOE1BU0wsQ0FBQztvQkFDTCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUN2QixPQUFPLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDekI7NkJBQ0YsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO2lCQUNGOzs7OzhCQXBDRDs7Ozs7OztBQ0FBO0FBRUEsSUFBYSxlQUFlLEdBQTZCLE9BQU8sQ0FBQyxPQUFPLEVBQUU7SUFFeEUsVUFBVSxDQUFDLGNBQWMsRUFBRTtRQUN6QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSx3QkFBd0I7U0FDcEMsQ0FBQztRQUNGLE9BQU8sQ0FBQywwQ0FBMEMsRUFDaEQsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsZUFBZTtTQUMzQixDQUFDLENBQUM7S0FDTixDQUFDO0lBRUYsVUFBVSxDQUFDLGVBQWUsRUFBRTtRQUMxQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsRUFB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