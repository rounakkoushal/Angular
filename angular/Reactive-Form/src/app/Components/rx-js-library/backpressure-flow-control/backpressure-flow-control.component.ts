import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { throttleTime, debounceTime, takeUntil, take } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-backpressure-flow-control',
  templateUrl: './backpressure-flow-control.component.html',
  styleUrls: ['./backpressure-flow-control.component.css']
})
export class BackpressureFlowControlComponent implements OnInit, OnDestroy {

  throttleResults: { timestamp: string, message: string }[] = [];
  debounceResults: { timestamp: string, message: string }[] = [];
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

  demonstrateThrottle(): void {
    this.throttleResults = [];
    this.addThrottleResult('Starting throttle demo...');
    
    // Create fast interval stream
    const fastStream = interval(50).pipe(
      take(20),
      takeUntil(this.destroy$)
    );

    // Apply throttle
    fastStream.pipe(
      throttleTime(200)
    ).subscribe(value => {
      this.addThrottleResult(`Throttled value: ${value}`);
    });

    // Show original stream for comparison
    fastStream.subscribe(value => {
      this.addThrottleResult(`Original value: ${value}`);
    });
  }

  demonstrateDebounce(): void {
    this.debounceResults = [];
    this.addDebounceResult('Starting debounce demo...');
    
    const rapidEmissions = new Subject<number>();
    
    // Apply debounce
    rapidEmissions.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.addDebounceResult(`Debounced value: ${value}`);
    });

    // Emit rapid values
    let counter = 0;
    const emitRapidly = () => {
      if (counter < 10) {
        rapidEmissions.next(counter);
        this.addDebounceResult(`Emitted: ${counter}`);
        counter++;
        setTimeout(emitRapidly, counter < 5 ? 100 : 500); // Fast then slow
      }
    };
    
    setTimeout(emitRapidly, 500);
  }

  private addThrottleResult(message: string): void {
    this.throttleResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addDebounceResult(message: string): void {
    this.debounceResults.push({
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
    this.quizService.generateMCQQuestions('backpressure-flow-control')
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
    this.quizService.getInterviewQuestions('backpressure-flow-control')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
