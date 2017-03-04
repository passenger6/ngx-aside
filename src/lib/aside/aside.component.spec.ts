/* tslint:disable:no-unused-variable */

import {
    TestBed,
    ComponentFixture,
    async,
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import {
    NgxAsideComponent
} from './aside.component';
import { NgxAsideModule } from './aside.module';
import { By } from '@angular/platform-browser';


describe('Component: Aside', () => {
    let component: NgxAsideComponent;
    let fixture: ComponentFixture<NgxAsideComponent>;
    let debugElement: DebugElement;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [{
                ngModule: NgxAsideModule
            }]
        });

        fixture = TestBed.createComponent(NgxAsideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });


    it('should create an instance', () => {
        const componentTotest = new NgxAsideComponent(null, null);
        expect(componentTotest).toBeTruthy();
    });


    it('should be able to show a panel', () => {
        component.show();
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            debugElement = fixture.debugElement.query(By.css('aside'));
            expect(debugElement).toBeTruthy();
        });
    });

    it('should be able to hide a panel', () => {


        component.hide();

        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(fixture.debugElement.query(By.css('aside'))).toBeFalsy();
        });

    });


    it('should hide a panel by pressing escape button', async(() => {

        component.show();
        fixture.detectChanges();

        debugElement = fixture.debugElement;

        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Escape',
            shiftKey: true

        });


        Object.defineProperty(event, 'which', {'value': 27});
        Object.defineProperty(event, 'keyCode', {'value': 27});


        debugElement.nativeElement.dispatchEvent(event);

        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(fixture.debugElement.query(By.css('aside'))).toBeNull();
        });

    }));
});

