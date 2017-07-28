import {
    animate,
    AnimationEntryMetadata,
    style,
    transition,
    trigger
} from '@angular/core';

export const slideAnimations: AnimationEntryMetadata = trigger('slide', [

    transition('void => left', [
        style({
            opacity: .6,
            transform: 'translate3d(-100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)',
            style({
                opacity: 1,
                transform: 'translateZ(0)'
            }))
    ]),

    transition('void => right', [
        style({
            opacity: .6,
            transform: 'translate3d(100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)',
            style({
                opacity: 1,
                transform: 'translateZ(0)'
            }))
    ]),

    transition('left => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(-50%,0,0)'
        }
        ))
    ]),

    transition('right => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(50%,0,0)'
        }
        ))
    ])
])
