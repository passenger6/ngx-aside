import {
    animate,
    transition,
    trigger,
    state,
    style,
    AnimationTriggerMetadata
} from '@angular/animations';

const animationTypeLeft = '0.3s cubic-bezier(0,0,0.3,1)';
const animationTypeRight = '0.3s cubic-bezier(0,0,0.3,1)';

export const leftSideAnimations: AnimationTriggerMetadata = trigger('slideLeft', [
    state('left', style({
        transform: 'translate3d(0,0,0)'
    })),
    transition('* => left', [
        animate(animationTypeLeft,
            style({
                opacity: 1,
                transform: 'translate3d(0,0,0)'
            }))
    ]),
    transition('left => *', [
        animate(animationTypeLeft,
            style({
                opacity: .1,
                transform: 'translate3d(-102%,0,0)'
            }))
    ])
]);

export const rightideAnimations: AnimationTriggerMetadata = trigger('slideRight', [
    state('right', style({
        transform: 'translate3d(0,0,0)',

    })),
    transition('* => right', [
        animate(animationTypeRight,
            style({
                opacity: 1,
                transform: 'translate3d(0,0,0)',
            }))
    ]),
    transition('right => *', [
        animate(animationTypeRight,
            style({
                opacity: .1,
                transform: 'translate3d(102%,0,0)',
            }))
    ]),
]);
