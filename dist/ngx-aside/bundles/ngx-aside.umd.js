(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-aside', ['exports', '@angular/core', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ngx-aside'] = {}),global.ng.core,global.ng.animations,global.ng.common));
}(this, (function (exports,core,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxOverlayComponent = (function () {
        function NgxOverlayComponent() {
            this.showStatus = true;
        }
        NgxOverlayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-aside-overlay',
                        template: "\n        <div class=\"overlay\" [@show]=\"showStatus\"></div>",
                        styles: [".overlay {\n        z-index: 1;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: currentColor;\n        opacity: .6;\n    }"],
                        animations: [
                            animations.trigger('show', [
                                animations.transition('void => *', [
                                    animations.style([{ opacity: 0 }]),
                                    animations.animate(100, animations.style([{ opacity: .6 }]))
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
    var slideAnimations = animations.trigger('slide', [
        animations.transition('void => left', [
            animations.style({
                opacity: .6,
                transform: 'translate3d(-100%,0,0)'
            }),
            animations.animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)', animations.style({
                opacity: 1,
                transform: 'translateZ(0)'
            }))
        ]),
        animations.transition('void => right', [
            animations.style({
                opacity: .6,
                transform: 'translate3d(100%,0,0)'
            }),
            animations.animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)', animations.style({
                opacity: 1,
                transform: 'translateZ(0)'
            }))
        ]),
        animations.transition('left => void', [
            animations.animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', animations.style({
                opacity: 0,
                transform: 'translate3d(-50%,0,0)'
            }))
        ]),
        animations.transition('right => void', [
            animations.animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', animations.style({
                opacity: 0,
                transform: 'translate3d(50%,0,0)'
            }))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAsideComponent = (function () {
        function NgxAsideComponent(_resolver, vcRef) {
            this._resolver = _resolver;
            this.vcRef = vcRef;
            this.cancel = new core.EventEmitter();
            this.submit = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ngx-aside',
                        template: "<aside [@slide]=\"position\" *ngIf=\"visibleStatus\" [className]=\"position\">\n\n    <!-- Custom Header -->\n    <ng-content *ngIf=\"!showDefaultHeader\" class=\"aside-title-huj\" select=\"header\">\n\n\n    </ng-content>\n    <!-- End Custom Header -->\n\n\n    <!-- Default Header -->\n    <header *ngIf=\"showDefaultHeader\">\n        <div class=\"aside-title\">\n            {{title}}\n        </div>\n\n        <div (click)=\"hideAside($event)\" class=\"aside-button-close\">\n            &times;\n        </div>\n\n    </header>\n    <!-- End Custom Header -->\n\n\n    <section>\n        <div class=\"aside-container\">\n            <ng-content></ng-content>\n        </div>\n    </section>\n\n    <!-- Custom Footer -->\n    <ng-content *ngIf=\"!showDefaultFooter\" select=\"footer\"></ng-content>\n    <!-- End Custom Footer -->\n\n    <!-- Default Footer -->\n    <footer *ngIf=\"showDefaultFooter\">\n\n        <button (click)=\"hideAside($event)\" type=\"button\" class=\"btn btn-secondary btn-cancel\">\n         {{cancelButtonTitle}}</button>\n\n        <button (click)=\"submitAside($event)\" type=\"button\" class=\"btn btn-primary btn-submit\">{{submitButtonTitle}}</button>\n\n\n    </footer>\n    <!--End  Default Footer -->\n\n</aside>",
                        styles: [":host *{box-sizing:border-box}:host aside.right{right:0;top:0;bottom:0}:host aside.left{left:0;top:0;bottom:0}aside{will-change:opacity;display:flex;flex-direction:column;align-items:stretch;position:fixed;width:auto;max-width:50%;background-color:#fff;z-index:2;box-shadow:-6px 3px 11px 0 rgba(0,0,0,.23);padding:0 16px;height:100vh}section{overflow:auto;flex-grow:1}header{font-size:20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:64px;flex-shrink:0}header .aside-button-close{width:20px;text-align:center;opacity:.8}header .aside-button-close:hover{cursor:pointer;opacity:1}footer{flex-shrink:0;border-top:1px solid #e5e5e5;display:flex;align-items:flex-start;padding:16px 0}footer button{margin-right:6px}.left footer{justify-content:flex-end}.right footer{justify-content:flex-start}:host.left aside{box-shadow:6px -1px 11px 0 rgba(0,0,0,.23)}:host.left.footer{justify-content:flex-end}"],
                        animations: [slideAnimations]
                    },] },
        ];
        /** @nocollapse */
        NgxAsideComponent.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        NgxAsideComponent.propDecorators = {
            cancel: [{ type: core.Output }],
            submit: [{ type: core.Output }],
            position: [{ type: core.Input }],
            showOverlay: [{ type: core.Input }],
            closeOnEscape: [{ type: core.Input }],
            showDefaultFooter: [{ type: core.Input }],
            showDefaultHeader: [{ type: core.Input }],
            title: [{ type: core.Input }],
            cancelButtonTitle: [{ type: core.Input }],
            submitButtonTitle: [{ type: core.Input }],
            handleEscape: [{ type: core.HostListener, args: ['document:keydown.esc', ['$event'],] }]
        };
        return NgxAsideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxAsideModule = (function () {
        function NgxAsideModule() {
        }
        /**
         * @return {?}
         */
        NgxAsideModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: NgxAsideModule,
                    providers: []
                };
            };
        NgxAsideModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            NgxAsideComponent,
                            NgxOverlayComponent
                        ],
                        providers: [],
                        entryComponents: [
                            NgxAsideComponent,
                            NgxOverlayComponent
                        ],
                        exports: [
                            NgxAsideComponent,
                            NgxOverlayComponent
                        ]
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

    exports.NgxAsideModule = NgxAsideModule;
    exports.ɵb = slideAnimations;
    exports.ɵa = NgxAsideComponent;
    exports.ɵc = NgxOverlayComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWFzaWRlL2xpYi9vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICB0cmFuc2l0aW9uLFxyXG4gIHN0eWxlLFxyXG4gIGFuaW1hdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFzaWRlLW92ZXJsYXknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIiBbQHNob3ddPVwic2hvd1N0YXR1c1wiPjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYC5vdmVybGF5IHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IC42O1xyXG4gICAgfWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3Nob3cnLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAwIH1dKSxcclxuICAgICAgICBhbmltYXRlKDEwMCxcclxuICAgICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IC42IH1dKVxyXG4gICAgICAgIClcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neE92ZXJsYXlDb21wb25lbnQge1xyXG4gIHB1YmxpYyBzaG93U3RhdHVzOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2hvd1N0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCB0cmlnZ2VyLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUFuaW1hdGlvbnM6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlJywgW1xyXG5cclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IC42LFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwwLDApJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgfSkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IC42LFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgxMDAlLDAsMCknXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSknLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xyXG4gICAgICB9KSlcclxuICBdKSxcclxuXHJcbiAgdHJhbnNpdGlvbignbGVmdCA9PiB2b2lkJywgW1xyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsMCwwKSdcclxuICAgIH1cclxuICAgICkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ3JpZ2h0ID0+IHZvaWQnLCBbXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNTAlLDAsMCknXHJcbiAgICB9XHJcbiAgICApKVxyXG4gIF0pXHJcbl0pO1xyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uSW5pdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vYXNpZGUuYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGA8YXNpZGUgW0BzbGlkZV09XCJwb3NpdGlvblwiICpuZ0lmPVwidmlzaWJsZVN0YXR1c1wiIFtjbGFzc05hbWVdPVwicG9zaXRpb25cIj5cclxuXHJcbiAgICA8IS0tIEN1c3RvbSBIZWFkZXIgLS0+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEhlYWRlclwiIGNsYXNzPVwiYXNpZGUtdGl0bGUtaHVqXCIgc2VsZWN0PVwiaGVhZGVyXCI+XHJcblxyXG5cclxuICAgIDwvbmctY29udGVudD5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XHJcblxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBIZWFkZXIgLS0+XHJcbiAgICA8aGVhZGVyICpuZ0lmPVwic2hvd0RlZmF1bHRIZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtdGl0bGVcIj5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgY2xhc3M9XCJhc2lkZS1idXR0b24tY2xvc2VcIj5cclxuICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cclxuXHJcblxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPCEtLSBDdXN0b20gRm9vdGVyIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRGb290ZXJcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gRm9vdGVyIC0tPlxyXG5cclxuICAgIDwhLS0gRGVmYXVsdCBGb290ZXIgLS0+XHJcbiAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0RlZmF1bHRGb290ZXJcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tY2FuY2VsXCI+XHJcbiAgICAgICAgIHt7Y2FuY2VsQnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zdWJtaXRcIj57e3N1Ym1pdEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8IS0tRW5kICBEZWZhdWx0IEZvb3RlciAtLT5cclxuXHJcbjwvYXNpZGU+YCxcclxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbmltYXRpb25zXVxyXG59KVxyXG5cclxuLypcclxuXHJcbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xyXG4gd2lkdGhcclxuIG1heC13aWR0aFxyXG5cclxuIFRPRE86IEBPdXRwdXRFdmVudHNcclxuIEBPdXRwdXRGdW5jdGlvbnMgP1xyXG5cclxuIC0tLS1cclxuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIE5neEFzaWRlQ29tcG9uZW50IHtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd092ZXJsYXkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dEZWZhdWx0Rm9vdGVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcclxuICBASW5wdXQoKSBwdWJsaWMgc3VibWl0QnV0dG9uVGl0bGUgPSAnU3VibWl0JztcclxuXHJcbiAgcHVibGljIHZpc2libGVTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHJvb3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIHByaXZhdGUgYmFja2Ryb3A6IENvbXBvbmVudFJlZjx7fT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYgPSB2Y1JlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlQXNpZGUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7IC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJtaXRBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQoKTtcclxuICAgIH0gZWxzZSB7ICAvLyBJZiB3ZSBkb25gdCBoYXZlIGFueSBzdWJzY3JpYmVyc1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlT25Fc2NhcGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5oaWRlQXNpZGUoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCkge1xyXG5cclxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmJhY2tkcm9wID0gdm9pZCAwO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KCkge1xyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRkT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRPdmVybGF5KCkge1xyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wICYmIHRoaXMuc2hvd092ZXJsYXkpIHtcclxuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KE92ZXJsYXlDb21wb25lbnRGYWN0b3J5LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hBc2lkZUNvbXBvbmVudCB9IGZyb20gJy4vYXNpZGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEFzaWRlQ29tcG9uZW50LFxyXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE5neEFzaWRlQ29tcG9uZW50LFxyXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXHJcbiAgICBOZ3hPdmVybGF5Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neEFzaWRlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImFuaW1hdGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiT3V0cHV0IiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0NFO1lBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7O29CQS9CRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxnRUFDNkM7d0JBQ3ZELE1BQU0sRUFBRSxDQUFDLDhNQVNMLENBQUM7d0JBQ0wsVUFBVSxFQUFFOzRCQUNWQyxrQkFBTyxDQUFDLE1BQU0sRUFBRTtnQ0FDZEMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3RCQyxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQ0FDdkJDLGtCQUFPLENBQUMsR0FBRyxFQUNURCxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUN6QjtpQ0FDRixDQUFDOzZCQUNILENBQUM7eUJBQ0g7cUJBQ0Y7Ozs7a0NBbkNEOzs7Ozs7O0FDQUE7QUFFQSxRQUFhLGVBQWUsR0FBNkJGLGtCQUFPLENBQUMsT0FBTyxFQUFFO1FBRXhFQyxxQkFBVSxDQUFDLGNBQWMsRUFBRTtZQUN6QkMsZ0JBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsd0JBQXdCO2FBQ3BDLENBQUM7WUFDRkMsa0JBQU8sQ0FBQywwQ0FBMEMsRUFDaERELGdCQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGVBQWU7YUFDM0IsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUVGRCxxQkFBVSxDQUFDLGVBQWUsRUFBRTtZQUMxQkMsZ0JBQUssQ0FBQztnQkFDSixPQUFP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