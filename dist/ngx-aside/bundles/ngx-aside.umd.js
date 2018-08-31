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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWFzaWRlL2xpYi9vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICB0cmFuc2l0aW9uLFxyXG4gIHN0eWxlLFxyXG4gIGFuaW1hdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ25neC1hc2lkZS1vdmVybGF5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgW0BzaG93XT1cInNob3dTdGF0dXNcIj48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2Aub3ZlcmxheSB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAuNjtcclxuICAgIH1gXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdzaG93JywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogMCB9XSksXHJcbiAgICAgICAgYW5pbWF0ZSgxMDAsXHJcbiAgICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAuNiB9XSlcclxuICAgICAgICApXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hPdmVybGF5Q29tcG9uZW50IHtcclxuICBwdWJsaWMgc2hvd1N0YXR1czogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNob3dTdGF0dXMgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVBbmltYXRpb25zOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZScsIFtcclxuXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiBsZWZ0JywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAuNixcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTEwMCUsMCwwKSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKScsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXHJcbiAgICAgIH0pKVxyXG4gIF0pLFxyXG5cclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHJpZ2h0JywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAuNixcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMTAwJSwwLDApJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgfSkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLDAsMCknXHJcbiAgICB9XHJcbiAgICApKVxyXG4gIF0pLFxyXG5cclxuICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDUwJSwwLDApJ1xyXG4gICAgfVxyXG4gICAgKSlcclxuICBdKVxyXG5dKTtcclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBPbkluaXQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBzbGlkZUFuaW1hdGlvbnMgfSBmcm9tICcuL2FzaWRlLmFuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbmd4LWFzaWRlJyxcclxuICB0ZW1wbGF0ZTogYDxhc2lkZSBbQHNsaWRlXT1cInBvc2l0aW9uXCIgKm5nSWY9XCJ2aXNpYmxlU3RhdHVzXCIgW2NsYXNzTmFtZV09XCJwb3NpdGlvblwiPlxyXG5cclxuICAgIDwhLS0gQ3VzdG9tIEhlYWRlciAtLT5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0SGVhZGVyXCIgY2xhc3M9XCJhc2lkZS10aXRsZS1odWpcIiBzZWxlY3Q9XCJoZWFkZXJcIj5cclxuXHJcblxyXG4gICAgPC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cclxuXHJcblxyXG4gICAgPCEtLSBEZWZhdWx0IEhlYWRlciAtLT5cclxuICAgIDxoZWFkZXIgKm5nSWY9XCJzaG93RGVmYXVsdEhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiBjbGFzcz1cImFzaWRlLWJ1dHRvbi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxyXG5cclxuXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8IS0tIEN1c3RvbSBGb290ZXIgLS0+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEZvb3RlclwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBGb290ZXIgLS0+XHJcblxyXG4gICAgPCEtLSBEZWZhdWx0IEZvb3RlciAtLT5cclxuICAgIDxmb290ZXIgKm5nSWY9XCJzaG93RGVmYXVsdEZvb3RlclwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1jYW5jZWxcIj5cclxuICAgICAgICAge3tjYW5jZWxCdXR0b25UaXRsZX19PC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdEFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN1Ym1pdFwiPnt7c3VibWl0QnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwhLS1FbmQgIERlZmF1bHQgRm9vdGVyIC0tPlxyXG5cclxuPC9hc2lkZT5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbmltYXRpb25zXVxyXG59KVxyXG5cclxuLypcclxuXHJcbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xyXG4gd2lkdGhcclxuIG1heC13aWR0aFxyXG5cclxuIFRPRE86IEBPdXRwdXRFdmVudHNcclxuIEBPdXRwdXRGdW5jdGlvbnMgP1xyXG5cclxuIC0tLS1cclxuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIE5neEFzaWRlQ29tcG9uZW50IHtcclxuXHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd092ZXJsYXkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dEZWZhdWx0Rm9vdGVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGUgPSAnJztcclxuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcclxuICBASW5wdXQoKSBwdWJsaWMgc3VibWl0QnV0dG9uVGl0bGUgPSAnU3VibWl0JztcclxuXHJcbiAgcHVibGljIHZpc2libGVTdGF0dXMgPSBmYWxzZTtcclxuICBwcml2YXRlIHJvb3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIHByaXZhdGUgYmFja2Ryb3A6IENvbXBvbmVudFJlZjx7fT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYgPSB2Y1JlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlQXNpZGUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7IC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJtaXRBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQoKTtcclxuICAgIH0gZWxzZSB7ICAvLyBJZiB3ZSBkb25gdCBoYXZlIGFueSBzdWJzY3JpYmVyc1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlT25Fc2NhcGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5oaWRlQXNpZGUoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCkge1xyXG5cclxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghdGhpcy5iYWNrZHJvcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmJhY2tkcm9wID0gdm9pZCAwO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KCkge1xyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRkT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRPdmVybGF5KCkge1xyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wICYmIHRoaXMuc2hvd092ZXJsYXkpIHtcclxuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcclxuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMucm9vdFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KE92ZXJsYXlDb21wb25lbnRGYWN0b3J5LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmd4T3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hBc2lkZUNvbXBvbmVudCB9IGZyb20gJy4vYXNpZGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW05neEFzaWRlQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEFzaWRlQ29tcG9uZW50LFxyXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudCxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW05neE92ZXJsYXlDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVNb2R1bGUge1xyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImFuaW1hdGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiT3V0cHV0IiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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