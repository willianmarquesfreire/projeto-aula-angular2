import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { PageOneModule } from './modules/page-one/page-one.module';
import { PageTwoModule } from './modules/page-two/page-two.module';


import { PageTwoComponent } from './modules/page-two/page-two.component'

import {AuthGuard} from './guards/auth.guard'

const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'page-two', loadChildren: './modules/page-two/page-two.module#PageTwoModule', canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: 'page-one', loadChildren: './modules/page-one/page-one.module#PageOneModule', canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HomeModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }