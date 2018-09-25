/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
export class NgxOverlayComponent {
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
if (false) {
    /** @type {?} */
    NgxOverlayComponent.prototype.showStatus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXNpZGUvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBNEI3QixNQUFNO0lBR0o7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN4Qjs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7eURBQzZDO2dCQUN2RCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7O01BU0wsQ0FBQztnQkFDTCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDZCxVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QixPQUFPLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDekI7eUJBQ0YsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0cmlnZ2VyLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgc3R5bGUsXHJcbiAgYW5pbWF0ZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUtb3ZlcmxheScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIFtAc2hvd109XCJzaG93U3RhdHVzXCI+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgLm92ZXJsYXkge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogLjY7XHJcbiAgICB9YF0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignc2hvdycsIFtcclxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xyXG4gICAgICAgIHN0eWxlKFt7IG9wYWNpdHk6IDAgfV0pLFxyXG4gICAgICAgIGFuaW1hdGUoMTAwLFxyXG4gICAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogLjYgfV0pXHJcbiAgICAgICAgKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4T3ZlcmxheUNvbXBvbmVudCB7XHJcbiAgcHVibGljIHNob3dTdGF0dXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zaG93U3RhdHVzID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19