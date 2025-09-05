import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reactiveFromDataReducer, itemReducer } from './Store/Reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      reactiveFormData: reactiveFromDataReducer,
      ngrxDemo: itemReducer
    }),
    StoreDevtoolsModule.instrument({ name: "Advance" }),

  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }