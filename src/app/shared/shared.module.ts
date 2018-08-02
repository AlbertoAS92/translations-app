import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const modules = [
  CommonModule,
  TranslateModule.forChild()
];

const components = [];

const exported = [
  ...components,
  CommonModule,
  TranslateModule
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class SharedModule {}
