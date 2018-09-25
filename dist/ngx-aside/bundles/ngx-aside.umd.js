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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWFzaWRlL2xpYi9vdmVybGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5hbmltYXRpb25zLnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWFzaWRlL2xpYi9hc2lkZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uLFxuICBzdHlsZSxcbiAgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWFzaWRlLW92ZXJsYXknLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIFtAc2hvd109XCJzaG93U3RhdHVzXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5vdmVybGF5IHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgb3BhY2l0eTogLjY7XG4gICAgfWBdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2hvdycsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogMCB9XSksXG4gICAgICAgIGFuaW1hdGUoMTAwLFxuICAgICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IC42IH1dKVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hPdmVybGF5Q29tcG9uZW50IHtcbiAgcHVibGljIHNob3dTdGF0dXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaG93U3RhdHVzID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHRyaWdnZXIsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgc2xpZGVBbmltYXRpb25zOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZScsIFtcblxuICB0cmFuc2l0aW9uKCd2b2lkID0+IGxlZnQnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogLjYsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtMTAwJSwwLDApJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSknLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xuICAgICAgfSkpXG4gIF0pLFxuXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gcmlnaHQnLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogLjYsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgxMDAlLDAsMCknXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKScsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gICAgICB9KSlcbiAgXSksXG5cbiAgdHJhbnNpdGlvbignbGVmdCA9PiB2b2lkJywgW1xuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsMCwwKSdcbiAgICB9XG4gICAgKSlcbiAgXSksXG5cbiAgdHJhbnNpdGlvbigncmlnaHQgPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg1MCUsMCwwKSdcbiAgICB9XG4gICAgKSlcbiAgXSlcbl0pO1xuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdCxcbiAgSG9zdExpc3RlbmVyLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vYXNpZGUuYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1hc2lkZScsXG4gIHRlbXBsYXRlOiBgPGFzaWRlIFtAc2xpZGVdPVwicG9zaXRpb25cIiAqbmdJZj1cInZpc2libGVTdGF0dXNcIiBbY2xhc3NOYW1lXT1cInBvc2l0aW9uXCI+XG5cbiAgICA8IS0tIEN1c3RvbSBIZWFkZXIgLS0+XG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc2hvd0RlZmF1bHRIZWFkZXJcIiBjbGFzcz1cImFzaWRlLXRpdGxlLWh1alwiIHNlbGVjdD1cImhlYWRlclwiPlxuXG5cbiAgICA8L25nLWNvbnRlbnQ+XG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cblxuXG4gICAgPCEtLSBEZWZhdWx0IEhlYWRlciAtLT5cbiAgICA8aGVhZGVyICpuZ0lmPVwic2hvd0RlZmF1bHRIZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFzaWRlLXRpdGxlXCI+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiBjbGFzcz1cImFzaWRlLWJ1dHRvbi1jbG9zZVwiPlxuICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvaGVhZGVyPlxuICAgIDwhLS0gRW5kIEN1c3RvbSBIZWFkZXIgLS0+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDwhLS0gQ3VzdG9tIEZvb3RlciAtLT5cbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEZvb3RlclwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICA8IS0tIEVuZCBDdXN0b20gRm9vdGVyIC0tPlxuXG4gICAgPCEtLSBEZWZhdWx0IEZvb3RlciAtLT5cbiAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0RlZmF1bHRGb290ZXJcIj5cblxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1jYW5jZWxcIj5cbiAgICAgICAgIHt7Y2FuY2VsQnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdEFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN1Ym1pdFwiPnt7c3VibWl0QnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxuXG5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8IS0tRW5kICBEZWZhdWx0IEZvb3RlciAtLT5cblxuPC9hc2lkZT5gLFxuICBzdHlsZXM6IFtgOmhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QgYXNpZGUucmlnaHR7cmlnaHQ6MDt0b3A6MDtib3R0b206MH06aG9zdCBhc2lkZS5sZWZ0e2xlZnQ6MDt0b3A6MDtib3R0b206MH1hc2lkZXt3aWxsLWNoYW5nZTpvcGFjaXR5O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtwb3NpdGlvbjpmaXhlZDt3aWR0aDphdXRvO21heC13aWR0aDo1MCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mjtib3gtc2hhZG93Oi02cHggM3B4IDExcHggMCByZ2JhKDAsMCwwLC4yMyk7cGFkZGluZzowIDE2cHg7aGVpZ2h0OjEwMHZofXNlY3Rpb257b3ZlcmZsb3c6YXV0bztmbGV4LWdyb3c6MX1oZWFkZXJ7Zm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtmbGV4LXNocmluazowfWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3Nle3dpZHRoOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTouOH1oZWFkZXIgLmFzaWRlLWJ1dHRvbi1jbG9zZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9Zm9vdGVye2ZsZXgtc2hyaW5rOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjE2cHggMH1mb290ZXIgYnV0dG9ue21hcmdpbi1yaWdodDo2cHh9LmxlZnQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucmlnaHQgZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LmxlZnQgYXNpZGV7Ym94LXNoYWRvdzo2cHggLTFweCAxMXB4IDAgcmdiYSgwLDAsMCwuMjMpfTpob3N0LmxlZnQuZm9vdGVye2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1gXSxcbiAgYW5pbWF0aW9uczogW3NsaWRlQW5pbWF0aW9uc11cbn0pXG5cbi8qXG5cbiBUT0RPOiBDb25maWd1cmFibGUgcGFyYW1ldGVyc1xuIHdpZHRoXG4gbWF4LXdpZHRoXG5cbiBUT0RPOiBAT3V0cHV0RXZlbnRzXG4gQE91dHB1dEZ1bmN0aW9ucyA/XG5cbiAtLS0tXG5cbiAqL1xuXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvbiA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgY2FuY2VsQnV0dG9uVGl0bGUgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgcHVibGljIHN1Ym1pdEJ1dHRvblRpdGxlID0gJ1N1Ym1pdCc7XG5cbiAgcHVibGljIHZpc2libGVTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSByb290Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xuICB9XG5cbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLmNhbmNlbC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KCk7XG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGhhbmRsZUVzY2FwZShldmVudCkge1xuXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaGlkZUFzaWRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcblxuICAgIHRoaXMudmlzaWJsZVN0YXR1cyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgdGhpcy5iYWNrZHJvcCA9IHZvaWQgMDtcblxuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gdHJ1ZTtcbiAgICB0aGlzLmFkZE92ZXJsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkT3ZlcmxheSgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xuICAgICAgY29uc3QgT3ZlcmxheUNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOZ3hPdmVybGF5Q29tcG9uZW50KTtcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLnJvb3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChPdmVybGF5Q29tcG9uZW50RmFjdG9yeSwgMCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neEFzaWRlQ29tcG9uZW50LFxuICAgIE5neE92ZXJsYXlDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXG4gICAgTmd4T3ZlcmxheUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEFzaWRlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hBc2lkZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJzdHlsZSIsImFuaW1hdGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiT3V0cHV0IiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0NFO1lBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7O29CQS9CRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxnRUFDNkM7d0JBQ3ZELE1BQU0sRUFBRSxDQUFDLDhNQVNMLENBQUM7d0JBQ0wsVUFBVSxFQUFFOzRCQUNWQyxrQkFBTyxDQUFDLE1BQU0sRUFBRTtnQ0FDZEMscUJBQVUsQ0FBQyxXQUFXLEVBQUU7b0NBQ3RCQyxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQ0FDdkJDLGtCQUFPLENBQUMsR0FBRyxFQUNURCxnQkFBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUN6QjtpQ0FDRixDQUFDOzZCQUNILENBQUM7eUJBQ0g7cUJBQ0Y7Ozs7a0NBbkNEOzs7Ozs7O0FDQUE7QUFFQSxRQUFhLGVBQWUsR0FBNkJGLGtCQUFPLENBQUMsT0FBTyxFQUFFO1FBRXhFQyxxQkFBVSxDQUFDLGNBQWMsRUFBRTtZQUN6QkMsZ0JBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsd0JBQXdCO2FBQ3BDLENBQUM7WUFDRkMsa0JBQU8sQ0FBQywwQ0FBMEMsRUFDaERELGdCQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGVBQWU7YUFDM0IsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUVGRCxxQkFBVSxDQUFDLGVBQWUsRUFBRTtZQUMxQkMsZ0JBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsdUJBQXVCO2FBQ25DLENBQUM7WUFDRkMsa0JBQU8sQ0FBQywwQ0FBMEMsRUFDaERELGdCQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGVBQWU7YUFDM0IsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUVGRCxxQkFBVSxDQUFDLGNBQWMsRUFBRTtZQUN6QkUsa0JBQU8sQ0FBQyx3Q0FBd0MsRUFBRUQsZ0JBQUssQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLHVCQUF1QjthQUNuQyxDQUNBLENBQUM7U0FDSCxDQUFDO1FBRUZELHFCQUFVLENBQUMsZUFBZSxFQUFFO1lBQzFCRSxrQkFBTyxDQUFDLHdDQUF3QyxFQUFFRCxnQkFBSyxDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUsc0JBQXNCO2FBQ2xDLENBQ0EsQ0FBQztTQUNILENBQUM7S0FDSCxDQUFDOzs7Ozs7QUMzQ0Y7UUFzR0UsMkJBQW9CLFNBQW1DLEVBQVUsS0FBdUI7WUFBcEUsY0FBUyxHQUFULFNBQVMsQ0FBMEI7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjswQkFsQjNDLElBQUlFLGlCQUFZLEVBQUU7MEJBQ2xCLElBQUlBLGlCQUFZLEVBQUU7NEJBRXBDLE9BQU87K0JBQ0osSUFBSTtpQ0FDRixJQUFJO3FDQUVBLElBQUk7cUNBQ0osSUFBSTt5QkFFaEIsRUFBRTtxQ0FDVSxRQUFRO3FDQUNSLFFBQVE7aUNBRVosS0FBSztZQUtuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1NBQ25DOzs7OztRQUVNLHFDQUFTOzs7O3NCQUFDLEtBQUs7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNOztvQkFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2I7Ozs7OztRQUlJLHVDQUFXOzs7O3NCQUFDLEtBQUs7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDcEI7cUJBQU07O29CQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFFYjs7Ozs7O1FBSUksd0NBQVk7Ozs7WUFEbkIsVUFDb0IsS0FBSztnQkFFdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7UUFFTSxnQ0FBSTs7OztnQkFFVCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQzs7Ozs7UUFJbEIsZ0NBQUk7Ozs7Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7Ozs7UUFHWixzQ0FBVTs7OztnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTs7b0JBQ3RDLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUM1RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZGOzs7b0JBN0lKTCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwwdUNBOENIO3dCQUNQLE1BQU0sRUFBRSxDQUFDLHE3QkFBcTdCLENBQUM7d0JBQy83QixVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzlCOzs7Ozt3QkF6RENNLDZCQUF3Qjt3QkFQeEJDLHFCQUFnQjs7Ozs2QkFpRmZDLFdBQU07NkJBQ05BLFdBQU07K0JBRU5DLFVBQUs7a0NBQ0xBLFVBQUs7b0NBQ0xBLFVBQUs7d0NBRUxBLFVBQUs7d0NBQ0xBLFVBQUs7NEJBRUxBLFVBQUs7d0NBQ0xBLFVBQUs7d0NBQ0xBLFVBQUs7bUNBNEJMQyxpQkFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztnQ0E1SGxEOzs7Ozs7O0FDQUE7Ozs7OztRQXdCUyxzQkFBTzs7O1lBQWQ7Z0JBQ0UsT0FBTztvQkFDTCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLEVBQUU7aUJBQ2QsQ0FBQzthQUNIOztvQkF4QkZDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRTs0QkFDWixpQkFBaUI7NEJBQ2pCLG1CQUFtQjt5QkFDcEI7d0JBQ0QsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsZUFBZSxFQUFFOzRCQUNmLGlCQUFpQjs0QkFDakIsbUJBQW1CO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsaUJBQWlCOzRCQUNqQixtQkFBbUI7eUJBQ3BCO3FCQUNGOzs2QkF0QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9