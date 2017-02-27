import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageTwoComponent } from './page-two.component';

const appRoutes: Routes = [
  { path: 'list', component: PageTwoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PageTwoComponent]
})
export class PageTwoModule { }
