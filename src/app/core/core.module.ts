import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationsService } from './services/translations/translations.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

const modules = [
  BrowserModule,
  RouterModule,
  HttpClientModule,
  TranslateModule.forRoot()
];

const components = [
  NavigationBarComponent
];

const exported = [
  ...components,
  TranslateModule
];

const providers = [
  TranslationsService
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
