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
                // tslint:disable-next-line:component-selector
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXNpZGUvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBNkI3QixNQUFNO0lBR0o7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztLQUN4Qjs7O1lBaENGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFO3lEQUM2QztnQkFDdkQsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7OztNQVNMLENBQUM7Z0JBQ0wsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2QsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFDdkIsT0FBTyxDQUFDLEdBQUcsRUFDVCxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3pCO3lCQUNGLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uLFxuICBzdHlsZSxcbiAgYW5pbWF0ZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXNpZGUtb3ZlcmxheScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgW0BzaG93XT1cInNob3dTdGF0dXNcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm92ZXJsYXkge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICB9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzaG93JywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZShbeyBvcGFjaXR5OiAwIH1dKSxcbiAgICAgICAgYW5pbWF0ZSgxMDAsXG4gICAgICAgICAgc3R5bGUoW3sgb3BhY2l0eTogLjYgfV0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neE92ZXJsYXlDb21wb25lbnQge1xuICBwdWJsaWMgc2hvd1N0YXR1czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNob3dTdGF0dXMgPSB0cnVlO1xuICB9XG59XG4iXX0=