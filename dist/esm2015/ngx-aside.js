import { Component, animate, style, transition, trigger, Input, ViewContainerRef, Output, EventEmitter, HostListener, ComponentFactoryResolver, NgModule } from '@angular/core';
import { trigger as trigger$1, transition as transition$1, style as style$1, animate as animate$1 } from '@angular/animations';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxOverlayComponent {
    constructor() {
        this.showStatus = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
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
                    trigger$1('show', [
                        transition$1('void => *', [
                            style$1([{ opacity: 0 }]),
                            animate$1(100, style$1([{ opacity: .6 }]))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
NgxOverlayComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
 * @suppress {checkTypes} checked by tsc
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
     * @return {?}
     */
    addOverlay() {
        if (!this.backdrop && this.showOverlay) {
            const /** @type {?} */ OverlayComponentFactory = this._resolver.resolveComponentFactory(NgxOverlayComponent);
            this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
        }
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
     * @return {?}
     */
    submitAside() {
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
        <div (click)="hideAside()" class="aside-button-close">
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
                styles: [`:host *{
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }
:host aside.right{
  right:0;
  top:0;
  bottom:0; }
:host aside.left{
  left:0;
  top:0;
  bottom:0; }
aside{
  will-change:opacity;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:stretch;
      -ms-flex-align:stretch;
          align-items:stretch;
  position:fixed;
  width:auto;
  max-width:50%;
  background-color:white;
  z-index:2;
  -webkit-box-shadow:-6px 3px 11px 0px rgba(0, 0, 0, 0.23);
          box-shadow:-6px 3px 11px 0px rgba(0, 0, 0, 0.23);
  padding:0 16px;
  height:100vh; }
section{
  overflow:auto;
  -webkit-box-flex:1;
      -ms-flex-positive:1;
          flex-grow:1; }
header{
  font-size:20px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  width:100%;
  height:64px;
  -ms-flex-negative:0;
      flex-shrink:0; }
  header .aside-button-close{
    width:20px;
    text-align:center;
    opacity:.8; }
    header .aside-button-close:hover{
      cursor:pointer;
      opacity:1; }
footer{
  -ms-flex-negative:0;
      flex-shrink:0;
  border-top:1px solid #e5e5e5;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  padding:16px 0 16px 0; }
  footer button{
    margin-right:6px; }
  .left footer{
    -webkit-box-pack:end;
        -ms-flex-pack:end;
            justify-content:flex-end; }
  .right footer{
    -webkit-box-pack:start;
        -ms-flex-pack:start;
            justify-content:flex-start; }
:host.left aside{
  -webkit-box-shadow:6px -1px 11px 0px rgba(0, 0, 0, 0.23);
          box-shadow:6px -1px 11px 0px rgba(0, 0, 0, 0.23); }
:host.left.footer{
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
`],
                animations: [slideAnimations]
            },] },
];
/** @nocollapse */
NgxAsideComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
];
NgxAsideComponent.propDecorators = {
    "cancel": [{ type: Output },],
    "submit": [{ type: Output },],
    "position": [{ type: Input },],
    "showOverlay": [{ type: Input },],
    "closeOnEscape": [{ type: Input },],
    "showDefaultFooter": [{ type: Input },],
    "showDefaultHeader": [{ type: Input },],
    "title": [{ type: Input },],
    "cancelButtonTitle": [{ type: Input },],
    "submitButtonTitle": [{ type: Input },],
    "handleEscape": [{ type: HostListener, args: ['document:keydown.esc', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxAsideModule {
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
/** @nocollapse */
NgxAsideModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxAsideModule, slideAnimations as ɵb, NgxAsideComponent as ɵa, NgxOverlayComponent as ɵc };
//# sourceMappingURL=ngx-aside.js.map
