import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { SecondViewComponent } from './pages/second-view/second-view.component';
import { ThirdViewComponent } from './pages/third-view/third-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SecondViewComponent,
    ThirdViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
