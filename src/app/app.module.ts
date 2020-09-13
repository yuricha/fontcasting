import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './components/status/status.component';
import { StatusModule } from './components/status/status.module';
import { MainModule } from './components/main/main.module';
import { MainComponent } from './components/main/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'status',
    component: StatusComponent
  }

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatusModule,
    MainModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
