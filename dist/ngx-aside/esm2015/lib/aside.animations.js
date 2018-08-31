/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { transition, style, animate, trigger } from '@angular/animations';
/** @type {?} */
export const slideAnimations = trigger('slide', [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hc2lkZS8iLCJzb3VyY2VzIjpbImxpYi9hc2lkZS5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUE0QixNQUFNLHFCQUFxQixDQUFDOztBQUVwRyxhQUFhLGVBQWUsR0FBNkIsT0FBTyxDQUFDLE9BQU8sRUFBRTtJQUV4RSxVQUFVLENBQUMsY0FBYyxFQUFFO1FBQ3pCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLHdCQUF3QjtTQUNwQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLDBDQUEwQyxFQUNoRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztLQUNOLENBQUM7SUFFRixVQUFVLENBQUMsZUFBZSxFQUFFO1FBQzFCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLHVCQUF1QjtTQUNuQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLDBDQUEwQyxFQUNoRCxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxlQUFlO1NBQzNCLENBQUMsQ0FBQztLQUNOLENBQUM7SUFFRixVQUFVLENBQUMsY0FBYyxFQUFFO1FBQ3pCLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsdUJBQXVCO1NBQ25DLENBQ0EsQ0FBQztLQUNILENBQUM7SUFFRixVQUFVLENBQUMsZUFBZSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQ0EsQ0FBQztLQUNILENBQUM7Q0FDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVBbmltYXRpb25zOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZScsIFtcclxuXHJcbiAgdHJhbnNpdGlvbigndm9pZCA9PiBsZWZ0JywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAuNixcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTEwMCUsMCwwKSdcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKScsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXHJcbiAgICAgIH0pKVxyXG4gIF0pLFxyXG5cclxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHJpZ2h0JywgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAuNixcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMTAwJSwwLDApJ1xyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKCcuMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWigwKSdcclxuICAgICAgfSkpXHJcbiAgXSksXHJcblxyXG4gIHRyYW5zaXRpb24oJ2xlZnQgPT4gdm9pZCcsIFtcclxuICAgIGFuaW1hdGUoJy4ycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLDAsMCknXHJcbiAgICB9XHJcbiAgICApKVxyXG4gIF0pLFxyXG5cclxuICB0cmFuc2l0aW9uKCdyaWdodCA9PiB2b2lkJywgW1xyXG4gICAgYW5pbWF0ZSgnLjJzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDUwJSwwLDApJ1xyXG4gICAgfVxyXG4gICAgKSlcclxuICBdKVxyXG5dKTtcclxuIl19