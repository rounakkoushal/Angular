import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngrxStateManagementRoutingComponents, NgrxStateManagementRoutingModule } from './ngrx-state-management-routing.module';
import { NgrxAssessmentComponent } from './ngrx-assessment/ngrx-assessment.component';

@NgModule({
  declarations: [
    ngrxStateManagementRoutingComponents,
    NgrxAssessmentComponent
  ],
  imports: [
    CommonModule,
    NgrxStateManagementRoutingModule
  ]
})
export class NgrxStateManagementModule { }
