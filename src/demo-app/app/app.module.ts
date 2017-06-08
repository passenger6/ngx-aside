import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxAsideModule } from '../../lib/aside/aside.module';
import { TestComponent } from './test.component';
import { PanelTestContentComponent } from './panel-test-content.component';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        PanelTestContentComponent
    ],
    imports: [
        BrowserModule,
        NgxAsideModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents:  [PanelTestContentComponent]
})
export class AppModule {
}
