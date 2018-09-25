import { Component, Input, ViewContainerRef, Output, EventEmitter, HostListener, ComponentFactoryResolver, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxOverlayComponent {
    constructor() {
        this.showStatus = true;
    }
}
NgxOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-aside-overlay',
                template: `
        <div class="overlay" [@show]="showStatus"></div>`,
                styles: [`.overlay {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: currentColor;
        opacity: .6;
    }`],
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
NgxOverlayComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const slideAnimations = trigger('slide', [
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
/*

 TODO: Configurable parameters
 width
 max-width

 TODO: @OutputEvents
 @OutputFunctions ?

 ----

 */
class NgxAsideComponent {
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

</aside>`,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxAsideModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxAsideModule,
            providers: []
        };
    }
}
NgxAsideModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxAsideModule, slideAnimations as ɵb, NgxAsideComponent as ɵa, NgxOverlayComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFzaWRlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYXNpZGUvbGliL292ZXJsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLmFuaW1hdGlvbnMudHMiLCJuZzovL25neC1hc2lkZS9saWIvYXNpZGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYXNpZGUvbGliL2FzaWRlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0cmlnZ2VyLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUtb3ZlcmxheScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIFtAc2hvd109XCJzaG93U3RhdHVzXCI+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgLm92ZXJsYXkge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogLjY7XHJcbiAgICB9YF0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignc2hvdycsIFtcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IDAgfV0pLFxyXG4gICAgICAgIGFuaW1hdGUoMTAwLFxyXG4gICAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogLjYgfV0pXHJcbiAgICAgICAgKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4T3ZlcmxheUNvbXBvbmVudCB7XHJcbiAgcHVibGljIHNob3dTdGF0dXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaG93U3RhdHVzID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUsIHRyaWdnZXIsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlQW5pbWF0aW9uczogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGUnLCBbXHJcblxyXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gbGVmdCcsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogLjYsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLDAsMCknXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMSknLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xyXG4gICAgICB9KSlcclxuICBdKSxcclxuXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiByaWdodCcsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogLjYsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsMCwwKSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKScsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXHJcbiAgICAgIH0pKVxyXG4gIF0pLFxyXG5cclxuICB0cmFuc2l0aW9uKCdsZWZ0ID0+IHZvaWQnLCBbXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTUwJSwwLDApJ1xyXG4gICAgfVxyXG4gICAgKSlcclxuICBdKSxcclxuXHJcbiAgdHJhbnNpdGlvbigncmlnaHQgPT4gdm9pZCcsIFtcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg1MCUsMCwwKSdcclxuICAgIH1cclxuICAgICkpXHJcbiAgXSlcclxuXSk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25Jbml0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5neE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc2xpZGVBbmltYXRpb25zIH0gZnJvbSAnLi9hc2lkZS5hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFzaWRlJyxcclxuICB0ZW1wbGF0ZTogYDxhc2lkZSBbQHNsaWRlXT1cInBvc2l0aW9uXCIgKm5nSWY9XCJ2aXNpYmxlU3RhdHVzXCIgW2NsYXNzTmFtZV09XCJwb3NpdGlvblwiPlxyXG5cclxuICAgIDwhLS0gQ3VzdG9tIEhlYWRlciAtLT5cclxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNob3dEZWZhdWx0SGVhZGVyXCIgY2xhc3M9XCJhc2lkZS10aXRsZS1odWpcIiBzZWxlY3Q9XCJoZWFkZXJcIj5cclxuXHJcblxyXG4gICAgPC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSBFbmQgQ3VzdG9tIEhlYWRlciAtLT5cclxuXHJcblxyXG4gICAgPCEtLSBEZWZhdWx0IEhlYWRlciAtLT5cclxuICAgIDxoZWFkZXIgKm5nSWY9XCJzaG93RGVmYXVsdEhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhc2lkZS10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAoY2xpY2spPVwiaGlkZUFzaWRlKCRldmVudClcIiBjbGFzcz1cImFzaWRlLWJ1dHRvbi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8IS0tIEVuZCBDdXN0b20gSGVhZGVyIC0tPlxyXG5cclxuXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8IS0tIEN1c3RvbSBGb290ZXIgLS0+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFzaG93RGVmYXVsdEZvb3RlclwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cclxuICAgIDwhLS0gRW5kIEN1c3RvbSBGb290ZXIgLS0+XHJcblxyXG4gICAgPCEtLSBEZWZhdWx0IEZvb3RlciAtLT5cclxuICAgIDxmb290ZXIgKm5nSWY9XCJzaG93RGVmYXVsdEZvb3RlclwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJoaWRlQXNpZGUoJGV2ZW50KVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1jYW5jZWxcIj5cclxuICAgICAgICAge3tjYW5jZWxCdXR0b25UaXRsZX19PC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdEFzaWRlKCRldmVudClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXN1Ym1pdFwiPnt7c3VibWl0QnV0dG9uVGl0bGV9fTwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwhLS1FbmQgIERlZmF1bHQgRm9vdGVyIC0tPlxyXG5cclxuPC9hc2lkZT5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCBhc2lkZS5yaWdodHtyaWdodDowO3RvcDowO2JvdHRvbTowfTpob3N0IGFzaWRlLmxlZnR7bGVmdDowO3RvcDowO2JvdHRvbTowfWFzaWRle3dpbGwtY2hhbmdlOm9wYWNpdHk7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpzdHJldGNoO3Bvc2l0aW9uOmZpeGVkO3dpZHRoOmF1dG87bWF4LXdpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoyO2JveC1zaGFkb3c6LTZweCAzcHggMTFweCAwIHJnYmEoMCwwLDAsLjIzKTtwYWRkaW5nOjAgMTZweDtoZWlnaHQ6MTAwdmh9c2VjdGlvbntvdmVyZmxvdzphdXRvO2ZsZXgtZ3JvdzoxfWhlYWRlcntmb250LXNpemU6MjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDo2NHB4O2ZsZXgtc2hyaW5rOjB9aGVhZGVyIC5hc2lkZS1idXR0b24tY2xvc2V7d2lkdGg6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjtvcGFjaXR5Oi44fWhlYWRlciAuYXNpZGUtYnV0dG9uLWNsb3NlOmhvdmVye2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MX1mb290ZXJ7ZmxleC1zaHJpbms6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MTZweCAwfWZvb3RlciBidXR0b257bWFyZ2luLXJpZ2h0OjZweH0ubGVmdCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5yaWdodCBmb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QubGVmdCBhc2lkZXtib3gtc2hhZG93OjZweCAtMXB4IDExcHggMCByZ2JhKDAsMCwwLC4yMyl9Omhvc3QubGVmdC5mb290ZXJ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfWBdLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFuaW1hdGlvbnNdXHJcbn0pXHJcblxyXG4vKlxyXG5cclxuIFRPRE86IENvbmZpZ3VyYWJsZSBwYXJhbWV0ZXJzXHJcbiB3aWR0aFxyXG4gbWF4LXdpZHRoXHJcblxyXG4gVE9ETzogQE91dHB1dEV2ZW50c1xyXG4gQE91dHB1dEZ1bmN0aW9ucyA/XHJcblxyXG4gLS0tLVxyXG5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4QXNpZGVDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgcHVibGljIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgcG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T3ZlcmxheSA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25Fc2NhcGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd0RlZmF1bHRGb290ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93RGVmYXVsdEhlYWRlciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjYW5jZWxCdXR0b25UaXRsZSA9ICdDYW5jZWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWJtaXRCdXR0b25UaXRsZSA9ICdTdWJtaXQnO1xyXG5cclxuICBwdWJsaWMgdmlzaWJsZVN0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcm9vdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgcHJpdmF0ZSBiYWNrZHJvcDogQ29tcG9uZW50UmVmPHt9PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZiA9IHZjUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVBc2lkZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMuY2FuY2VsLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHsgLy8gSWYgd2UgZG9uYHQgaGF2ZSBhbnkgc3Vic2NyaWJlcnNcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdEFzaWRlKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jYW5jZWwub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdWJtaXQuZW1pdCgpO1xyXG4gICAgfSBlbHNlIHsgIC8vIElmIHdlIGRvbmB0IGhhdmUgYW55IHN1YnNjcmliZXJzXHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgaGFuZGxlRXNjYXBlKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmhpZGVBc2lkZShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKSB7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlU3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuYmFja2Ryb3AgPSB2b2lkIDA7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coKSB7XHJcbiAgICB0aGlzLnZpc2libGVTdGF0dXMgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZE92ZXJsYXkoKSB7XHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3AgJiYgdGhpcy5zaG93T3ZlcmxheSkge1xyXG4gICAgICBjb25zdCBPdmVybGF5Q29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE5neE92ZXJsYXlDb21wb25lbnQpO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5yb290Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoT3ZlcmxheUNvbXBvbmVudEZhY3RvcnksIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ3hPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXHJcbiAgICBOZ3hPdmVybGF5Q29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTmd4QXNpZGVDb21wb25lbnQsXHJcbiAgICBOZ3hPdmVybGF5Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3hBc2lkZUNvbXBvbmVudCxcclxuICAgIE5neE92ZXJsYXlDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hBc2lkZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4QXNpZGVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBd0NF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