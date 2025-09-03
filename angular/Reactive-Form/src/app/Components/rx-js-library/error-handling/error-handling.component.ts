import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, timer, Subject } from 'rxjs';
import { catchError, retry, takeUntil, map } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit, OnDestroy {

  catchErrorResults: string[] = [];
  retryResults: string[] = [];
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

  triggerCatchError(): void {
    this.catchErrorResults = [];
    
    // Simulate an observable that sometimes fails
    const simulateApiCall = (shouldFail: boolean): Observable<string> => {
      return timer(500).pipe(
        map(() => {
          if (shouldFail) {
            throw new Error('API call failed');
          }
          return 'API Success';
        })
      );
    };

    // First call - success
    simulateApiCall(false).pipe(
      catchError(error => {
        this.catchErrorResults.push(`Error caught: ${error.message}`);
        return of('Fallback value');
      }),
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.catchErrorResults.push(`Result: ${result}`);
    });

    // Second call - failure with catchError
    setTimeout(() => {
      simulateApiCall(true).pipe(
        catchError(error => {
          this.catchErrorResults.push(`Error caught: ${error.message}`);
          return of('Fallback value');
        }),
        takeUntil(this.destroy$)
      ).subscribe(result => {
        this.catchErrorResults.push(`Result: ${result}`);
      });
    }, 1000);
  }

  triggerRetry(): void {
    debugger
    this.retryResults = [];
    let attemptCount = 0;

    // Create an observable that fails first 2 times, then succeeds
    const unreliableOperation = new Observable<string>(subscriber => {
      attemptCount++;
      this.retryResults.push(`Attempt ${attemptCount}`);
      
      if (attemptCount < 3) {
        setTimeout(() => {
          subscriber.error(new Error(`Attempt ${attemptCount} failed`));
        }, 300);
      } else {
        setTimeout(() => {
          subscriber.next('Success after retries!');
          subscriber.complete();
        }, 300);
      }
    });

    unreliableOperation.pipe(
      retry(2), // Retry up to 2 times
      catchError(error => {
        this.retryResults.push('All retries exhausted');
        return of('Final fallback');
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: result => {
        this.retryResults.push(`Final result: ${result}`);
      },
      error: error => {
        this.retryResults.push(`Unhandled error: ${error.message}`);
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
    this.quizService.generateMCQQuestions('error-handling')
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
    this.quizService.getInterviewQuestions('error-handling')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}