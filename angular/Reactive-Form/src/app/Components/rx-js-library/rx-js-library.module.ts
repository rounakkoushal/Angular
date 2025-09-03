import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rxJsLibraryRoutingComponents, RxJsLibraryRoutingModule } from './rx-js-library-routing.module';


@NgModule({
  declarations: [
    rxJsLibraryRoutingComponents
  ],
  imports: [
    CommonModule,
    RxJsLibraryRoutingModule
  ]
})
export class RxJsLibraryModule { }
