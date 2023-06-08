import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { Day1Component } from './css/day1/day1.component';
import { Day2Component } from './css/day2/day2.component';
import { AssignmentComponent } from './css/day1/assignment/assignment.component';
import { PracticeComponent } from './css/day1/practice/practice.component';
import { Assignment1Component } from './css/day1/assignment/assignment1/assignment1.component';
import { Assignment2Component } from './css/day1/assignment/assignment2/assignment2.component';
import { Assignment3Component } from './css/day1/assignment/assignment3/assignment3.component';
import { Practice1Component } from './css/day1/practice/practice1/practice1.component';
import { Practice2Component } from './css/day1/practice/practice2/practice2.component';
import { Practice3Component } from './css/day1/practice/practice3/practice3.component';
import { Practice4Component } from './css/day1/practice/practice4/practice4.component';
import { Htmlday1Component } from './html/htmlday1/htmlday1.component';
import { HtmlPracticeComponent } from './html/htmlday1/html-practice/html-practice.component';
import { HtmlAssignmentComponent } from './html/htmlday1/html-assignment/html-assignment.component';
import { HtmlAssignment1Component } from './html/htmlday1/html-assignment/html-assignment1/html-assignment1.component';
import { HtmlAssignment2Component } from './html/htmlday1/html-assignment/html-assignment2/html-assignment2.component';
import { HtmlPractice1Component } from './html/htmlday1/html-practice/html-practice1/html-practice1.component';
import { HtmlPractice2Component } from './html/htmlday1/html-practice/html-practice2/html-practice2.component';
import { JavascriptDay1Component } from './javascript/javascript-day1/javascript-day1.component';
import { JavascriptDay3Component } from './javascript/javascript-day3/javascript-day3.component';
import { JavascriptDay5Component } from './javascript/javascript-day5/javascript-day5.component';
import { JavascriptDay1PacticeComponent } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-pactice.component';
import { JavascriptDay1Practice1Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice1/javascript-day1-practice1.component';
import { JavascriptDay1Practice2Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice2/javascript-day1-practice2.component';
import { JavascriptDay1Practice3Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice3/javascript-day1-practice3.component';
import { JavascriptDay1Practice4Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice4/javascript-day1-practice4.component';
import { JavascriptDay1Practice5Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice5/javascript-day1-practice5.component';
import { JavascriptDay1Practice6Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice6/javascript-day1-practice6.component';
import { JavascriptDay1Practice7Component } from './javascript/javascript-day1/javascript-day1-pactice/javascript-day1-practice7/javascript-day1-practice7.component';
import { CssDay2AssignmentComponent } from './css/day2/css-day2-assignment/css-day2-assignment.component';
import { CssDay2Assignment1Component } from './css/day2/css-day2-assignment/css-day2-assignment1/css-day2-assignment1.component';
import { CssDay2Assignment2Component } from './css/day2/css-day2-assignment/css-day2-assignment2/css-day2-assignment2.component';
import { CssDay2Assignment3Component } from './css/day2/css-day2-assignment/css-day2-assignment3/css-day2-assignment3.component';
import { CssDay2Assignment4Component } from './css/day2/css-day2-assignment/css-day2-assignment4/css-day2-assignment4.component';
import { CssDay2Assignment5Component } from './css/day2/css-day2-assignment/css-day2-assignment5/css-day2-assignment5.component';
import { CssDay2Assignment6Component } from './css/day2/css-day2-assignment/css-day2-assignment6/css-day2-assignment6.component';
import { CssDay2Assignment7Component } from './css/day2/css-day2-assignment/css-day2-assignment7/css-day2-assignment7.component';
import { CssDay2PracticeComponent } from './css/day2/css-day2-practice/css-day2-practice.component';
import { CssDay2Practice1Component } from './css/day2/css-day2-practice/css-day2-practice1/css-day2-practice1.component';
import { CssDay2Practice2Component } from './css/day2/css-day2-practice/css-day2-practice2/css-day2-practice2.component';
import { CssDay2Practice3Component } from './css/day2/css-day2-practice/css-day2-practice3/css-day2-practice3.component';
import { CssDay2Practice4Component } from './css/day2/css-day2-practice/css-day2-practice4/css-day2-practice4.component';
import { CssDay2Practice5Component } from './css/day2/css-day2-practice/css-day2-practice5/css-day2-practice5.component';
import { CssDay2Practice6Component } from './css/day2/css-day2-practice/css-day2-practice6/css-day2-practice6.component';
import { CssDay2Practice7Component } from './css/day2/css-day2-practice/css-day2-practice7/css-day2-practice7.component';
import { CssDay2Practice8Component } from './css/day2/css-day2-practice/css-day2-practice8/css-day2-practice8.component';
import { JavascriptDay1AssignmentComponent } from './javascript/javascript-day1/javascript-day1-assignment/javascript-day1-assignment.component';
import { JavascriptDay1Assignment1Component } from './javascript/javascript-day1/javascript-day1-assignment/javascript-day1-assignment1/javascript-day1-assignment1.component';
import { JavascriptDay1Assignment2Component } from './javascript/javascript-day1/javascript-day1-assignment/javascript-day1-assignment2/javascript-day1-assignment2.component';
import { JavascriptDay3AssignmentComponent } from './javascript/javascript-day3/javascript-day3-assignment/javascript-day3-assignment.component';
import { JavascriptDay3PracticeComponent } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice.component';
import { JavascriptDay3Assignment1Component } from './javascript/javascript-day3/javascript-day3-assignment/javascript-day3-assignment1/javascript-day3-assignment1.component';
import { JavascriptDay3Assignment2Component } from './javascript/javascript-day3/javascript-day3-assignment/javascript-day3-assignment2/javascript-day3-assignment2.component';
import { JavascriptDay3Practice1Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice1/javascript-day3-practice1.component';
import { JavascriptDay3Practice2Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice2/javascript-day3-practice2.component';
import { JavascriptDay3Practice3Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice3/javascript-day3-practice3.component';
import { JavascriptDay3Practice4Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice4/javascript-day3-practice4.component';
import { JavascriptDay3Practice5Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice5/javascript-day3-practice5.component';
import { JavascriptDay3Practice6Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice6/javascript-day3-practice6.component';
import { JavascriptDay3Practice7Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice7/javascript-day3-practice7.component';
import { JavascriptDay3Practice8Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice8/javascript-day3-practice8.component';
import { JavascriptDay3Practice9Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice9/javascript-day3-practice9.component';
import { JavascriptDay3Practice10Component } from './javascript/javascript-day3/javascript-day3-practice/javascript-day3-practice10/javascript-day3-practice10.component';
import { JavascriptDay5AssignmentComponent } from './javascript/javascript-day5/javascript-day5-assignment/javascript-day5-assignment.component';
import { JavascriptDay5PracticeComponent } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice.component';
import { JavascriptDay5Assignment1Component } from './javascript/javascript-day5/javascript-day5-assignment/javascript-day5-assignment1/javascript-day5-assignment1.component';
import { JavascriptDay5Practice1Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice1/javascript-day5-practice1.component';
import { JavascriptDay5Practice2Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice2/javascript-day5-practice2.component';
import { JavascriptDay5Practice3Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice3/javascript-day5-practice3.component';
import { JavascriptDay5Practice4Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice4/javascript-day5-practice4.component';
import { JavascriptDay5Practice5Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice5/javascript-day5-practice5.component';
import { JavascriptDay5Practice6Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice6/javascript-day5-practice6.component';
import { JavascriptDay5Practice7Component } from './javascript/javascript-day5/javascript-day5-practice/javascript-day5-practice7/javascript-day5-practice7.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'css', component: CssComponent },
  { path: 'cssday1', component: Day1Component },
  {
    path: 'cssday1assignmernt', component: AssignmentComponent, children: [
      { path: 'cssday1assignmernt_Assignment1', component: Assignment1Component },
      { path: 'cssday1assignmernt_Assignment2', component: Assignment2Component },
      // { path: 'cssday1assignmernt_Assignment3', component: Assignment3Component },
    ]
  },


  {
    path: 'cssday1practice', component: PracticeComponent, children: [
      { path: 'cssday1practice_Practice1', component: Practice1Component },
      { path: 'cssday1practice_Practice2', component: Practice2Component },
      { path: 'cssday1practice_Practice3', component: Practice3Component },
      { path: 'cssday1practice_Practice4', component: Practice4Component },
    ]
  },

  { path: 'cssday2', component: Day2Component },
  {
    path: 'cssday2assignment', component: CssDay2AssignmentComponent, children: [
      { path: 'cssday2assignment_Assignment1', component: CssDay2Assignment1Component },
      { path: 'cssday2assignment_Assignment2', component: CssDay2Assignment2Component },
      { path: 'cssday2assignment_Assignment3', component: CssDay2Assignment3Component },
      { path: 'cssday2assignment_Assignment4', component: CssDay2Assignment4Component },
      { path: 'cssday2assignment_Assignment5', component: CssDay2Assignment5Component },
      { path: 'cssday2assignment_Assignment6', component: CssDay2Assignment6Component },
      // { path: 'cssday2assignment_Assignment7', component: CssDay2Assignment7Component },
    ]
  },

  {
    path: 'cssday2practice', component: CssDay2PracticeComponent, children: [
      { path: 'cssday2practice_Practice1', component: CssDay2Practice1Component },
      // { path: 'cssday2practice_Practice2', component: CssDay2Practice2Component },
      // { path: 'cssday2practice_Practice3', component: CssDay2Practice3Component },
      // { path: 'cssday2practice_Practice4', component: CssDay2Practice4Component },
      // { path: 'cssday2practice_Practice5', component: CssDay2Practice5Component },
      // { path: 'cssday2practice_Practice6', component: CssDay2Practice6Component },
      // { path: 'cssday2practice_Practice7', component: CssDay2Practice7Component },
      // { path: 'cssday2practice_Practice8', component: CssDay2Practice8Component },
    ]
  },


  { path: 'html', component: HtmlComponent },
  { path: 'htmlday1', component: Htmlday1Component },
  {
    path: 'htmlday1assignment', component: HtmlAssignmentComponent, children: [
      { path: 'htmlday1assignment_Assignment1', component: HtmlAssignment1Component },
      { path: 'htmlday1assignment_Assignment2', component: HtmlAssignment2Component },
    ]
  },

  {
    path: 'htmlday1practice', component: HtmlPracticeComponent, children: [
      { path: 'htmlday1practice_Practice1', component: HtmlPractice1Component },
      { path: 'htmlday1practice_Practice2', component: HtmlPractice2Component },
    ]
  },

  { path: 'javascript', component: JavascriptComponent },
  { path: 'javascriptday1', component: JavascriptDay1Component },
  {
    path: 'javascriptday1assignment', component: JavascriptDay1AssignmentComponent, children: [
      { path: 'javascriptday1assignment_Assignment1', component: JavascriptDay1Assignment1Component },
      { path: 'javascriptday1assignment_Assignment2', component: JavascriptDay1Assignment2Component },
    ]
  },

  {
    path: 'javascriptday1practice', component: JavascriptDay1PacticeComponent, children: [
      { path: 'javascriptday1practice_Practice1', component: JavascriptDay1Practice1Component },
      { path: 'javascriptday1practice_Practice2', component: JavascriptDay1Practice2Component },
      { path: 'javascriptday1practice_Practice3', component: JavascriptDay1Practice3Component },
      { path: 'javascriptday1practice_Practice4', component: JavascriptDay1Practice4Component },
      { path: 'javascriptday1practice_Practice5', component: JavascriptDay1Practice5Component },
      { path: 'javascriptday1practice_Practice6', component: JavascriptDay1Practice6Component },
      { path: 'javascriptday1practice_Practice7', component: JavascriptDay1Practice7Component },
    ]
  },


  { path: 'javascriptday3', component: JavascriptDay3Component },
  {
    path: 'javascriptday3assignment', component: JavascriptDay3AssignmentComponent, children: [
      { path: 'javascriptday3assignment_Assignment1', component: JavascriptDay3Assignment1Component },
      { path: 'javascriptday3assignment_Assignment2', component: JavascriptDay3Assignment2Component },
    ]
  },

  {
    path: 'javascriptday3practice', component: JavascriptDay3PracticeComponent, children: [
      { path: 'javascriptday3practice_Practice1', component: JavascriptDay3Practice1Component },
      { path: 'javascriptday3practice_Practice2', component: JavascriptDay3Practice2Component },
      { path: 'javascriptday3practice_Practice3', component: JavascriptDay3Practice3Component },
      { path: 'javascriptday3practice_Practice4', component: JavascriptDay3Practice4Component },
      { path: 'javascriptday3practice_Practice5', component: JavascriptDay3Practice5Component },
      { path: 'javascriptday3practice_Practice6', component: JavascriptDay3Practice6Component },
      { path: 'javascriptday3practice_Practice7', component: JavascriptDay3Practice7Component },
      { path: 'javascriptday3practice_Practice8', component: JavascriptDay3Practice8Component },
      { path: 'javascriptday3practice_Practice9', component: JavascriptDay3Practice9Component },
      // { path: 'javascriptday3practice_Practice10', component: JavascriptDay3Practice10Component },
    ]
  },


  { path: 'javascriptday5', component: JavascriptDay5Component },
  {
    path: 'javascriptday5assignment', component: JavascriptDay5AssignmentComponent, children: [

      // { path: 'javascriptday5assignment_Assignment1', component: JavascriptDay5Assignment1Component },
    ]
  },
  {
    path: 'javascriptday5practice', component: JavascriptDay5PracticeComponent, children: [
      { path: 'javascriptday5practice_Practice1', component: JavascriptDay5Practice1Component },
      { path: 'javascriptday5practice_Practice2', component: JavascriptDay5Practice2Component },
      { path: 'javascriptday5practice_Practice3', component: JavascriptDay5Practice3Component },
      { path: 'javascriptday5practice_Practice4', component: JavascriptDay5Practice4Component },
      { path: 'javascriptday5practice_Practice5', component: JavascriptDay5Practice5Component },
      // { path: 'javascriptday5practice_Practice6', component: JavascriptDay5Practice6Component },
      // { path: 'javascriptday5practice_Practice7', component: JavascriptDay5Practice7Component },

    ]
  },

  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PageNotFoundComponent,
    HtmlComponent,
    Htmlday1Component,
    HtmlPracticeComponent,
    HtmlAssignmentComponent,
    HtmlAssignment1Component,
    HtmlAssignment2Component,
    HtmlPractice1Component,
    HtmlPractice2Component,

    CssComponent,
    Day1Component,
    Day2Component,
    AssignmentComponent,
    PracticeComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    CssDay2AssignmentComponent,
    CssDay2Assignment1Component,
    CssDay2Assignment2Component,
    CssDay2Assignment3Component,
    CssDay2Assignment4Component,
    CssDay2Assignment5Component,
    CssDay2Assignment6Component,
    CssDay2Assignment7Component,
    CssDay2PracticeComponent,
    CssDay2Practice1Component,
    CssDay2Practice2Component,
    CssDay2Practice3Component,
    CssDay2Practice4Component,
    CssDay2Practice5Component,
    CssDay2Practice6Component,
    CssDay2Practice7Component,
    CssDay2Practice8Component,

    JavascriptComponent,
    JavascriptDay1Component,
    JavascriptDay1AssignmentComponent,
    JavascriptDay1Assignment1Component,
    JavascriptDay1Assignment2Component,
    JavascriptDay1PacticeComponent,
    JavascriptDay1Practice1Component,
    JavascriptDay1Practice2Component,
    JavascriptDay1Practice3Component,
    JavascriptDay1Practice4Component,
    JavascriptDay1Practice5Component,
    JavascriptDay1Practice6Component,
    JavascriptDay1Practice7Component,

    JavascriptDay3Component,
    JavascriptDay3AssignmentComponent,
    JavascriptDay3Assignment1Component,
    JavascriptDay3Assignment2Component,
    JavascriptDay3PracticeComponent,
    JavascriptDay3Practice1Component,
    JavascriptDay3Practice2Component,
    JavascriptDay3Practice3Component,
    JavascriptDay3Practice4Component,
    JavascriptDay3Practice5Component,
    JavascriptDay3Practice6Component,
    JavascriptDay3Practice7Component,
    JavascriptDay3Practice8Component,
    JavascriptDay3Practice9Component,
    JavascriptDay3Practice10Component,

    JavascriptDay5Component,
    JavascriptDay5AssignmentComponent,
    JavascriptDay5Assignment1Component,
    JavascriptDay5PracticeComponent,
    JavascriptDay5Practice1Component,
    JavascriptDay5Practice2Component,
    JavascriptDay5Practice3Component,
    JavascriptDay5Practice4Component,
    JavascriptDay5Practice5Component,
    JavascriptDay5Practice6Component,
    JavascriptDay5Practice7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
