import { AsideService } from './aside.service';
import { OutletDirective } from './outlet.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOverlayComponent } from './overlay.component';
import { NgxAsideComponent } from './aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideContainerComponent } from './aside-container/aside-container.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [NgxAsideComponent],
    declarations: [
        NgxAsideComponent,
        NgxOverlayComponent,
        AsideContainerComponent,
        OutletDirective
    ],
    entryComponents: [
        NgxOverlayComponent,
        NgxAsideComponent
    ],
    providers: [AsideService]
})

export class NgxAsideModule {

}
