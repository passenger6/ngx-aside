import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxAsideModule } from '../../lib/aside/aside.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxAsideModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
