import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HigherOrderObservablesComponent } from './higher-order-observables/higher-order-observables.component';
import { CustomOperatorsComponent } from './custom-operators/custom-operators.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { SubjectsMulticastingComponent } from './subjects-multicasting/subjects-multicasting.component';
import { HotColdObservablesComponent } from './hot-cold-observables/hot-cold-observables.component';
import { BackpressureFlowControlComponent } from './backpressure-flow-control/backpressure-flow-control.component';
import { TestingMarbleDiagramsComponent } from './testing-marble-diagrams/testing-marble-diagrams.component';
import { CombiningTransformingObservablesComponent } from './combining-transforming-observables/combining-transforming-observables.component';
import { CustomizingObservableCreationComponent } from './customizing-observable-creation/customizing-observable-creation.component';
import { RxJSLibraryComponent } from './rx-js-library.component';

const routes: Routes = [
  {
    path: '', component: RxJSLibraryComponent, children: [
      { path: 'higher-order-observables', component: HigherOrderObservablesComponent },
      { path: 'custom-operators', component: CustomOperatorsComponent },
      { path: 'error-handling', component: ErrorHandlingComponent },
      { path: 'schedulers', component: SchedulersComponent },
      { path: 'subjects-multicasting', component: SubjectsMulticastingComponent },
      { path: 'hot-cold-observables', component: HotColdObservablesComponent },
      { path: 'backpressure-flow-control', component: BackpressureFlowControlComponent },
      { path: 'testing-marble-diagrams', component: TestingMarbleDiagramsComponent },
      { path: 'combining-transforming-observables', component: CombiningTransformingObservablesComponent },
      { path: 'customizing-observable-creation', component: CustomizingObservableCreationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJsLibraryRoutingModule { }
export const rxJsLibraryRoutingComponents = [
  RxJSLibraryComponent,
  HigherOrderObservablesComponent,
  CustomOperatorsComponent,
  ErrorHandlingComponent,
  SchedulersComponent,
  SubjectsMulticastingComponent,
  HotColdObservablesComponent,
  BackpressureFlowControlComponent,
  TestingMarbleDiagramsComponent,
  CombiningTransformingObservablesComponent,
  CustomizingObservableCreationComponent
]

