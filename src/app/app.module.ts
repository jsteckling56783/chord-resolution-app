import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonPipe } from '@angular/common/src/pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurveComponent } from './curve/curve.component';

@NgModule({
  declarations: [
    AppComponent,
    CurveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
