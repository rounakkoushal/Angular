import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { tap, retryWhen, scan, delay, take, takeUntil } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-custom-operators',
  templateUrl: './custom-operators.component.html',
  styleUrls: ['./custom-operators.component.css']
})
export class CustomOperatorsComponent implements OnInit, OnDestroy {

  debugLogs: string[] = [];
  retryAttempts: string[] = [];
  private destroy$ = new Subject<void>();

  // Quiz properties
  mcqQuestions: MCQQuestion[] = [];
  interviewQuestions: any[] = [];
  userAnswers: number[] = [];
  quizSubmitted = false;
  quizScore = 0;
  quizLoading = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuizQuestions();
    this.loadInterviewQuestions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Custom debug operator
  debug(tag: string) {
    return (source: Observable<any>) => {
      return source.pipe(
        tap(value => {
          const timestamp = new Date().toLocaleTimeString();
          this.debugLogs.push(`[${tag}] ${timestamp}: ${JSON.stringify(value)}`);
        })
      );
    };
  }

  // Custom retry with delay operator
  retryWithDelay(retries: number, delayMs: number) {
    return (source: Observable<any>) => {
      return source.pipe(
        retryWhen(errors =>
          errors.pipe(
            scan((acc, error) => {
              if (acc >= retries) {
                throw error;
              }
              this.retryAttempts.push(`Attempt ${acc + 1} failed, retrying...`);
              return acc + 1;
            }, 0),
            delay(delayMs)
          )
        )
      );
    };
  }

  triggerDebugOperator(): void {
    this.debugLogs = [];

    // Create a simple observable with debug operator
    interval(1000).pipe(
      take(5),
      this.debug('Interval Values'),
      takeUntil(this.destroy$)
    ).subscribe({
      next: value => {
        // Values are already logged by debug operator
      },
      complete: () => {
        this.debugLogs.push('[Interval Values] Stream completed');
      }
    });
  }

  triggerRetryOperator(): void {
    this.retryAttempts = [];
    let attemptCount = 0;

    // Create an observable that fails first few times
    const failingObservable = new Observable(subscriber => {
      attemptCount++;
      if (attemptCount < 3) {
        subscriber.error(new Error(`Attempt ${attemptCount} failed`));
      } else {
        subscriber.next('Success!');
        subscriber.complete();
      }
    });
    // console.log(failingObservable.pipe(
    //   this.debug('Failing Observable'),
    //   takeUntil(this.destroy$)
    // ).subscribe())
    // failingObservable.subscribe(data => {
    //   console.log(data)
    // });

    failingObservable.pipe(
      this.retryWithDelay(3, 1000),
      takeUntil(this.destroy$)
    ).subscribe({
      next: value => {
        this.retryAttempts.push(`Retry Attempts: ${value}`);
      },
      error: error => {
        this.retryAttempts.push(`Final error: ${error.message}`);
      }
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
    this.quizService.generateMCQQuestions('custom-operators')
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
    this.quizService.getInterviewQuestions('custom-operators')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}