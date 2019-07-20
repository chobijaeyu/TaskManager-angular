import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { DropDirective } from './directive/drop.directive';
import { DragDirective } from './directive/drag.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropDirective,
    DragDirective,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ShareModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
