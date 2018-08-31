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
                        // tslint:disable-next-line:component-selector
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
                        // tslint:disable-next-line:component-selector
                        selector: 'ngx-aside',
                        template: "<aside [@slide]=\"position\" *ngIf=\"visibleStatus\" [className]=\"position\">\n\n    <!-- Custom Header -->\n    <ng-content *ngIf=\"!showDefaultHeader\" class=\"aside-title-huj\" select=\"header\">\n\n\n    </ng-content>\n    <!-- End Custom Header -->\n\n\n    <!-- Default Header -->\n    <header *ngIf=\"showDefaultHeader\">\n        <div class=\"aside-title\">\n            {{title}}\n        </div>\n\n        <div (click)=\"hideAside($event)\" class=\"aside-button-close\">\n            &times;\n        </div>\n\n    </header>\n    <!-- End Custom Header -->\n\n\n    <section>\n        <div class=\"aside-container\">\n            <ng-content></ng-content>\n        </div>\n    </section>\n\n    <!-- Custom Footer -->\n    <ng-content *ngIf=\"!showDefaultFooter\" select=\"footer\"></ng-content>\n    <!-- End Custom Footer -->\n\n    <!-- Default Footer -->\n    <footer *ngIf=\"showDefaultFooter\">\n\n        <button (click)=\"hideAside($event)\" type=\"button\" class=\"btn btn-secondary btn-cancel\">\n         {{cancelButtonTitle}}</button>\n\n        <button (click)=\"submitAside($event)\" type=\"button\" class=\"btn btn-primary btn-submit\">{{submitButtonTitle}}</button>\n\n\n    </footer>\n    <!--End  Default Footer -->\n\n</aside>\n",
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
        NgxAsideModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxAsideModule = NgxAsideModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWFzaWRlL2xpYi9vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uLFxuICBzdHlsZSxcbiAgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUtb3ZlcmxheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgW0BzaG93XT1cInNob3dTdGF0dXNcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm92ZXJsYXkge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzaG93JywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAwIH1dKSxcbiAgICAgICAgYW5pbWF0ZSgxMDAsXG4gICAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogLjYgfV0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neE92ZXJsYXlDb21wb25lbnQge1xuICBwdWJsaWMgc2hvd1N0YXR1czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dTdGF0dXMgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBzbGlkZUFuaW1hdGlvbnM6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlJywgW1xuXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbGVmdCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAuNixcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLDAsMCknXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKScsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gICAgICB9KSlcbiAgXSksXG5cbiAgdHJhbnNpdGlvbigndm9pZCA9PiByaWdodCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAuNixcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsMCwwKSdcbiAgICB9KSxcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcbiAgICAgIH0pKVxuICBdKSxcblxuICB0cmFuc2l0aW9uKCdsZWZ0ID0+IHZvaWQnLCBbXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTUwJSwwLDApJ1xuICAgIH1cbiAgICApKVxuICBdKSxcblxuICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDUwJSwwLDApJ1xuICAgIH1cbiAgICApKVxuICBdKVxuXSk7XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29tcG9uZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgc2xpZGVBbmltYXRpb25zIH0gZnJvbSAnLi9hc2lkZS5hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUnLFxuICB0ZW1wbGF0ZTogYDxhc2lkZSBbQHNsaWRlXT1cInBvc2l0aW9uXCIgKm5nSWY9XCJ2aXNpYmxlU3RhdHVzXCIgW2NsYXNzTmFtZV09XCJwb3NpdGlvblwiPlxuXG4gICAgPCEtLSBDdXN0b20gSGVhZGVyIC0tPlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0SGVhZGVyXCIgY2xhc3M9XCJhc2lkZS10aXRsZS1odWpcIiBzZWxlY3Q9XCJoZWFkZXJcIj5cblxuXG4gICAgPC9uZy1jb250ZW50PlxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XG5cblxuICAgIDwhLS0gRGVmYXVsdCBIZWFkZXIgLS0+XG4gICAgPGhlYWRlciAqbmdJZj1cInNob3dEZWZhdWx0SGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS10aXRsZVwiPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cImhpZGVBc2lkZSgkZXZlbnQpXCIgY2xhc3M9XCJhc2lkZS1idXR0b24tY2xvc2VcIj5cbiAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2hlYWRlcj5cbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8IS0tIEN1c3RvbSBGb290ZXIgLS0+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRGb290ZXJcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPCEtLSBFbmQgQ3VzdG9tIEZvb3RlciAtLT5cblxuICAgIDwhLS0gRGVmYXVsdCBGb290ZXIgLS0+XG4gICAgPGZvb3RlciAqbmdJZj1cInNob3dEZWZhdWx0Rm9vdGVyXCI+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tY2FuY2VsXCI+XG4gICAgICAgICB7e2NhbmNlbEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzdWJtaXRBc2lkZSgkZXZlbnQpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zdWJtaXRcIj57e3N1Ym1pdEJ1dHRvblRpdGxlfX08L2J1dHRvbj5cblxuXG4gICAgPC9mb290ZXI+XG4gICAgPCEtLUVuZCAgRGVmYXVsdCBGb290ZXIgLS0+XG5cbjwvYXNpZGU+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcbiAgYW5pbWF0aW9uczogW3NsaWRlQW5pbWF0aW9uc11cbn0pXG5cbi8qXG5cbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xuIHdpZHRoXG4gbWF4LXdpZHRoXG5cbiBUT0RPOiBAT3V0cHV0RXZlbnRzXG4gQE91dHB1dEZ1bmN0aW9ucyA/XG5cbiAtLS0tXG5cbiAqL1xuXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgcHVibGljIHN1Ym1pdEJ1dHRvblRpdGxlID0gJ1N1Ym1pdCc7XG5cbiAgcHVibGljIHZpc2libGVTdGF0dXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSByb290Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xuICB9XG5cbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KCk7XG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xuXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaGlkZUFzaWRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcblxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgdGhpcy5iYWNrZHJvcCA9IHZvaWQgMDtcblxuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmFkZE92ZXJsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChPdmVybGF5Q29tcG9uZW50RmFjdG9yeSwgMCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW05neEFzaWRlQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTmd4T3ZlcmxheUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hBc2lkZU1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsInN0eWxlIiwiYW5pbWF0ZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDb250YWluZXJSZWYiLCJPdXRwdXQiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUF5Q0U7WUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4Qjs7b0JBaENGQSxjQUFTLFNBQUM7O3dCQUVULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxnRUFDNkM7d0JBQ3ZELE1BQU0sRUFBRSxDQUFDLDhNQVNMLENBQUM7d0JBQ0wsVUFBVSxFQUFFOzRCQUNWQyxrQkFBTyxDQUFDLE1BQU0sRUFBRTtnQ0FDZEMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3RCQyxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQ0FDdkJDLGtCQUFPLENBQUMsR0FBRyxFQUNURCxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUN6QjtpQ0FDRixDQUFDOzZCQUNILENBQUM7eUJBQ0g7cUJBQ0Y7Ozs7a0NBcENEOzs7Ozs7O0FDQUE7QUFFQSxRQUFhLGVBQWUsR0FBNkJGLGtCQUFPLENBQUMsT0FBTyxFQUFFO1FBRXhFQyxxQkFBVSxDQUFDLGNBQWMsRUFBRTtZQUN6QkMsZ0JBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsRUFBRTtn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