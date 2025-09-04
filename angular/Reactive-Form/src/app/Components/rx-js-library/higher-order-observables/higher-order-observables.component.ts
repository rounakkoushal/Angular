import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { mergeMap, switchMap, take, takeUntil } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-higher-order-observables',
  templateUrl: './higher-order-observables.component.html',
  styleUrls: ['./higher-order-observables.component.css']
})
export class HigherOrderObservablesComponent implements OnInit, OnDestroy {

  mergeMapResults: string[] = [];
  switchMapResults: string[] = [];
  private destroy$ = new Subject<void>();

  // Quiz properties
  mcqQuestions: MCQQuestion[] = [];
  quizLoading = false;

  interviewQuestions: any[] = [];

  userAnswers: number[] = [];
  quizSubmitted = false;
  quizScore = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuizQuestions();
    this.loadInterviewQuestions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  triggerMergeMap(): void {
    this.mergeMapResults = [];

    // Simulate multiple clicks
    of(1, 2, 3).pipe(
      mergeMap(value =>
        interval(1000).pipe(
          take(3),
          takeUntil(this.destroy$)
        ).pipe(
          mergeMap(intervalValue => of(`Click ${value} - Interval ${intervalValue}`))
        ),2
      ),
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.mergeMapResults.push(result);
    });

    // of(1, 2, 3).pipe(
    //   mergeMap(value =>{
    //     return of(`rounak ${value} - Interval `)
    //   })
    // ).subscribe(result => {
    //   this.mergeMapResults.push(result);
    // });

    // of(1, 2, 3).pipe(exhaustMap(value => { return of(value * 2) })).subscribe(data => { console.log(data); })

  }

  triggerSwitchMap(): void {
    this.switchMapResults = [];

    // Simulate rapid clicks that switch to latest
    of('Search A', 'Search B', 'Search C').pipe(
      switchMap(query =>
        interval(300).pipe(
          take(3),
          takeUntil(this.destroy$)
        ).pipe(
          mergeMap(value => of(`${query} - Result ${value}`))
        )
      ),
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.switchMapResults.push(result);
    });
  }

  selectAnswer(questionIndex: number, answerIndex: number): void {
    this.userAnswers[questionIndex] = answerIndex;
  }

  submitQuiz(): void {
    this.quizScore = 0;
    for (let i = 0; i < this.mcqQuestions.length; i++) {
      if (this.userAnswers[i] === this.mcqQuestions[i].correct) {
        this.quizScore++;
      }
    }
    this.quizSubmitted = true;
  }

  resetQuiz(): void {
    this.userAnswers = [];
    this.quizSubmitted = false;
    this.quizScore = 0;
  }

  getPercentage(): number {
    return Math.round((this.quizScore / this.mcqQuestions.length) * 100);
  }

  loadQuizQuestions(): void {
    this.quizLoading = true;
    this.quizService.generateMCQQuestions('higher-order-observables')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.mcqQuestions = questions;
        this.quizLoading = false;
      });
  }

  generateNewQuiz(): void {
    this.resetQuiz();
    this.loadQuizQuestions();
  }

  loadInterviewQuestions(): void {
    this.quizService.getInterviewQuestions('higher-order-observables')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}