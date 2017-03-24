import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxOverlayComponent} from './overlay.component';
import {NgxAsideComponent} from './aside.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, BrowserAnimationsModule],
    exports: [NgxAsideComponent],
    declarations: [
        NgxAsideComponent,
        NgxOverlayComponent,
    ],
    entryComponents: [NgxOverlayComponent]
})

export class NgxAsideModule {

}
