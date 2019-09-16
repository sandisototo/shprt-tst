import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GridViewComponent },
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    GridViewComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
