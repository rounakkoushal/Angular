import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './Components/forms/forms.component';
import { DynamicFormComponent } from './Components/forms/dynamic-form/dynamic-form.component';
import { ReactiveFormComponent } from './Components/forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FormsComponent,
    DynamicFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
