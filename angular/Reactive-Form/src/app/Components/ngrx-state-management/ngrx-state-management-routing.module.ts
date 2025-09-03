import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxStateManagementComponent } from './ngrx-state-management/ngrx-state-management.component';
import { ActionsComponent } from './actions/actions.component';
import { ReducersComponent } from './reducers/reducers.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { EffectsComponent } from './effects/effects.component';
import { StoreComponent } from './store/store.component';
import { NgrxDevtoolsComponent } from './ngrx-devtools/ngrx-devtools.component';

const routes: Routes = [
  {
    path: '', component: NgrxStateManagementComponent, children: [
      { path: 'actions', component: ActionsComponent },
      { path: 'reducers', component: ReducersComponent },
      { path: 'selectors', component: SelectorsComponent },
      { path: 'effects', component: EffectsComponent },
      { path: 'store', component: StoreComponent },
      { path: 'ngrx-devtools', component: NgrxDevtoolsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxStateManagementRoutingModule { }
export const ngrxStateManagementRoutingComponents = [
  NgrxStateManagementComponent,
  ActionsComponent,
  ReducersComponent,
  SelectorsComponent,
  EffectsComponent,
  StoreComponent,
  NgrxDevtoolsComponent
]
