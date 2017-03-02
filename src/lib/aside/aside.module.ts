import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOverlayComponent } from './overlay.component';
import { NgxAsideComponent } from './aside.component';

@NgModule({
    imports: [CommonModule],
    exports: [NgxAsideComponent],
    declarations: [
        NgxAsideComponent,
        NgxOverlayComponent,
    ],
    entryComponents: [NgxOverlayComponent]
})

export class NgxAsideModule {

}
