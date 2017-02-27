import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from './../guards/auth.guard'

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
