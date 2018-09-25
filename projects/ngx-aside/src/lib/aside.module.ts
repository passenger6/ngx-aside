import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOverlayComponent } from './overlay.component';
import { NgxAsideComponent } from './aside.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxAsideComponent,
    NgxOverlayComponent
  ],
  providers: [],
  entryComponents: [
    NgxAsideComponent,
    NgxOverlayComponent
  ],
  exports: [
    NgxAsideComponent,
    NgxOverlayComponent
  ]
})
export class NgxAsideModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAsideModule,
      providers: []
    };
  }
}
