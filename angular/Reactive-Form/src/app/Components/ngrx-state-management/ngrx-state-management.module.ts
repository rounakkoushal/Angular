import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngrxStateManagementRoutingComponents, NgrxStateManagementRoutingModule } from './ngrx-state-management-routing.module';

@NgModule({
  declarations: [
    ngrxStateManagementRoutingComponents
  ],
  imports: [
    CommonModule,
    NgrxStateManagementRoutingModule
  ]
})
export class NgrxStateManagementModule { }
