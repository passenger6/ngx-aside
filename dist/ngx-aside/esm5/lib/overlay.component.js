/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
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
export { NgxOverlayComponent };
if (false) {
    /** @type {?} */
    NgxOverlayComponent.prototype.showStatus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXNpZGUvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDOztJQWdDM0I7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN4Qjs7Z0JBaENGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGdFQUM2QztvQkFDdkQsTUFBTSxFQUFFLENBQUMsOE1BU0wsQ0FBQztvQkFDTCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUN2QixPQUFPLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDekI7NkJBQ0YsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO2lCQUNGOzs7OzhCQXBDRDs7U0FzQ2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uLFxuICBzdHlsZSxcbiAgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUtb3ZlcmxheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgW0BzaG93XT1cInNob3dTdGF0dXNcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm92ZXJsYXkge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzaG93JywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAwIH1dKSxcbiAgICAgICAgYW5pbWF0ZSgxMDAsXG4gICAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogLjYgfV0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neE92ZXJsYXlDb21wb25lbnQge1xuICBwdWJsaWMgc2hvd1N0YXR1czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dTdGF0dXMgPSB0cnVlO1xuICB9XG59XG4iXX0=