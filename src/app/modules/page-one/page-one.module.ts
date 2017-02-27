import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageOneComponent } from './page-one.component';

const appRoutes: Routes = [
  { path: 'list', component: PageOneComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PageOneComponent]
})
export class PageOneModule { }
