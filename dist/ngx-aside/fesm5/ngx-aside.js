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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYXNpZGUvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmFuaW1hdGlvbnMudHMiLCJuZzovL25neC1hc2lkZS9saWIvYXNpZGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0cmlnZ2VyLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd4LWFzaWRlLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIiBbQHNob3ddPVwic2hvd1N0YXR1c1wiPjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYC5vdmVybGF5IHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IC42O1xyXG4gICAgfWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3cnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAwIH1dKSxcclxuICAgICAgICBhbmltYXRlKDEwMCxcclxuICAgICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IC42IH1dKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neE92ZXJsYXlDb21wb25lbnQge1xyXG4gIHB1YmxpYyBzaG93U3RhdHVzOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2hvd1N0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUFuaW1hdGlvbnM6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlJywgW1xyXG5cclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IC42LFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwwLDApJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgfSkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IC42LFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgxMDAlLDAsMCknXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSknLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xyXG4gICAgICB9KSlcclxuICBdKSxcclxuXHJcbiAgdHJhbnNpdGlvbignbGVmdCA9PiB2b2lkJywgW1xyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsMCwwKSdcclxuICAgIH1cclxuICAgICkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IHZvaWQnLCBbXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNTAlLDAsMCknXHJcbiAgICB9XHJcbiAgICApKVxyXG4gIF0pXHJcbl0pO1xyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uSW5pdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vYXNpZGUuYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUnLFxyXG4gIHRlbXBsYXRlOiBgPGFzaWRlIFtAc2xpZGVdPVwicG9zaXRpb25cIiAqbmdJZj1cInZpc2libGVTdGF0dXNcIiBbY2xhc3NOYW1lXT1cInBvc2l0aW9uXCI+XHJcblxyXG4gICAgPCEtLSBDdXN0b20gSGVhZGVyIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRIZWFkZXJcIiBjbGFzcz1cImFzaWRlLXRpdGxlLWh1alwiIHNlbGVjdD1cImhlYWRlclwiPlxyXG5cclxuXHJcbiAgICA8L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxyXG5cclxuXHJcbiAgICA8IS0tIERlZmF1bHQgSGVhZGVyIC0tPlxyXG4gICAgPGhlYWRlciAqbmdJZj1cInNob3dEZWZhdWx0SGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIGNsYXNzPVwiYXNpZGUtYnV0dG9uLWNsb3NlXCI+XHJcbiAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XHJcblxyXG5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwhLS0gQ3VzdG9tIEZvb3RlciAtLT5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0Rm9vdGVyXCIgc2VsZWN0PVwiZm9vdGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEZvb3RlciAtLT5cclxuXHJcbiAgICA8IS0tIERlZmF1bHQgRm9vdGVyIC0tPlxyXG4gICAgPGZvb3RlciAqbmdJZj1cInNob3dEZWZhdWx0Rm9vdGVyXCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWNhbmNlbFwiPlxyXG4gICAgICAgICB7e2NhbmNlbEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic3VibWl0QXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc3VibWl0XCI+e3tzdWJtaXRCdXR0b25UaXRsZX19PC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPCEtLUVuZCAgRGVmYXVsdCBGb290ZXIgLS0+XHJcblxyXG48L2FzaWRlPlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCBhc2lkZS5yaWdodHtyaWdodDowO3RvcDowO2JvdHRvbTowfTpob3N0IGFzaWRlLmxlZnR7bGVmdDowO3RvcDowO2JvdHRvbTowfWFzaWRle3dpbGwtY2hhbmdlOm9wYWNpdHk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOmF1dG87bWF4LXdpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoyO2JveC1zaGFkb3c6LTZweCAzcHggMTFweCAwIHJnYmEoMCwwLDAsLjIzKTtwYWRkaW5nOjAgMTZweDtoZWlnaHQ6MTAwdmh9c2VjdGlvbntvdmVyZmxvdzphdXRvO2ZsZXgtZ3JvdzoxfWhlYWRlcntmb250LXNpemU6MjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDo2NHB4O2ZsZXgtc2hyaW5rOjB9aGVhZGVyIC5hc2lkZS1idXR0b24tY2xvc2V7d2lkdGg6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjtvcGFjaXR5Oi44fWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3NlOmhvdmVye2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1mb290ZXJ7ZmxleC1zaHJpbms6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTZweCAwfWZvb3RlciBidXR0b257bWFyZ2luLXJpZ2h0OjZweH0ubGVmdCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5yaWdodCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QubGVmdCBhc2lkZXtib3gtc2hhZG93OjZweCAtMXB4IDExcHggMCByZ2JhKDAsMCwwLC4yMyl9Omhvc3QubGVmdC5mb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFuaW1hdGlvbnNdXHJcbn0pXHJcblxyXG4vKlxyXG5cclxuIFRPRE86IENvbmZpZ3VyYWJsZSBwYXJhbWV0ZXJzXHJcbiB3aWR0aFxyXG4gbWF4LXdpZHRoXHJcblxyXG4gVE9ETzogQE91dHB1dEV2ZW50c1xyXG4gQE91dHB1dEZ1bmN0aW9ucyA/XHJcblxyXG4gLS0tLVxyXG5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEhlYWRlciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxCdXR0b25UaXRsZSA9ICdDYW5jZWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWJtaXRCdXR0b25UaXRsZSA9ICdTdWJtaXQnO1xyXG5cclxuICBwdWJsaWMgdmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcm9vdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdWJtaXQuZW1pdCgpO1xyXG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgaGFuZGxlRXNjYXBlKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmhpZGVBc2lkZShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKSB7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmFja2Ryb3AgPSB2b2lkIDA7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coKSB7XHJcbiAgICB0aGlzLnZpc2libGVTdGF0dXMgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZE92ZXJsYXkoKSB7XHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xyXG4gICAgICBjb25zdCBPdmVybGF5Q29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5neE92ZXJsYXlDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoT3ZlcmxheUNvbXBvbmVudEZhY3RvcnksIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbTmd4QXNpZGVDb21wb25lbnRdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXHJcbiAgICBOZ3hPdmVybGF5Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTmd4T3ZlcmxheUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hBc2lkZU1vZHVsZSB7XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBeUNFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDeEI7O2dCQWhDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxnRUFDNkM7b0JBQ3ZELE1BQU0sRUFBRSxDQUFDLDhNQVNMLENBQUM7b0JBQ0wsVUFBVSxFQUFFO3dCQUNWLE9B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