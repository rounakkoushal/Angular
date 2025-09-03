import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject, asyncScheduler, queueScheduler } from 'rxjs';
import { observeOn, takeUntil } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.css']
})
export class SchedulersComponent implements OnInit, OnDestroy {

  asyncResults: { timestamp: string, message: string }[] = [];
  queueResults: { timestamp: string, message: string }[] = [];
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

  demonstrateAsyncScheduler(): void {
    this.asyncResults = [];
    this.addAsyncResult('Starting asyncScheduler demo...');
    
    // Demonstrate observeOn with asyncScheduler
    of(1, 2, 3).pipe(
      observeOn(asyncScheduler),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.addAsyncResult(`Async emission: ${value}`);
    });

    // Schedule individual tasks with delays
    asyncScheduler.schedule(() => {
      this.addAsyncResult('Scheduled task 1 (1000ms delay)');
    }, 1000);

    asyncScheduler.schedule(() => {
      this.addAsyncResult('Scheduled task 2 (5000ms delay)');
    }, 5000);

    asyncScheduler.schedule(() => {
      this.addAsyncResult('Scheduled task 3 (3000ms delay)');
    }, 3000);
  }

  demonstrateQueueScheduler(): void {
    this.queueResults = [];
    this.addQueueResult('Starting queueScheduler demo...');
    
    // Demonstrate synchronous execution
    of(1, 2, 3, 4).pipe(
      observeOn(queueScheduler),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.addQueueResult(`Queue emission: ${value}`);
    });

    // Schedule synchronous tasks
    queueScheduler.schedule(() => {
      this.addQueueResult('Queued task 1 (immediate)');
    });

    queueScheduler.schedule(() => {
      this.addQueueResult('Queued task 2 (immediate)');
    });

    queueScheduler.schedule(() => {
      this.addQueueResult('Queued task 3 (immediate)');
    });

    this.addQueueResult('All queue tasks completed synchronously');
  }

  private addAsyncResult(message: string): void {
    this.asyncResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addQueueResult(message: string): void {
    this.queueResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
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
    this.quizService.generateMCQQuestions('schedulers')
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
    this.quizService.getInterviewQuestions('schedulers')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
