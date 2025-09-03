import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, timer, interval } from 'rxjs';
import { share, shareReplay, takeUntil, take } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-hot-cold-observables',
  templateUrl: './hot-cold-observables.component.html',
  styleUrls: ['./hot-cold-observables.component.css']
})
export class HotColdObservablesComponent implements OnInit, OnDestroy {

  coldResults: { timestamp: string, message: string }[] = [];
  hotResults: { timestamp: string, message: string }[] = [];
  shareResults: string[] = [];
  publishResults: string[] = [];
  multicastResults: string[] = [];
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

  demonstrateColdObservable(): void {
    this.coldResults = [];
    
    // Cold Observable - each subscription gets its own execution
    const coldObservable = new Observable<number>(subscriber => {
      const randomValue = Math.random();
      this.addColdResult(`Observable created with value: ${randomValue.toFixed(3)}`);
      subscriber.next(randomValue);
      subscriber.complete();
    });

    // First subscriber
    coldObservable.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addColdResult(`Subscriber 1 received: ${value.toFixed(3)}`);
    });

    // Second subscriber (gets different execution)
    setTimeout(() => {
      coldObservable.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.addColdResult(`Subscriber 2 received: ${value.toFixed(3)}`);
      });
    }, 1000);
  }

  demonstrateHotObservable(): void {
    this.hotResults = [];
    
    // Hot Observable using Subject
    const subject = new Subject<string>();
    const hotObservable = subject.asObservable();

    // First subscriber
    hotObservable.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addHotResult(`Subscriber 1 received: ${value}`);
    });

    // Emit first value
    setTimeout(() => {
      subject.next('First emission');
      this.addHotResult('Emitted: First emission');
    }, 500);

    // Second subscriber (joins later)
    setTimeout(() => {
      hotObservable.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.addHotResult(`Subscriber 2 received: ${value}`);
      });
      this.addHotResult('Subscriber 2 joined');
    }, 1500);

    // Emit second value (both subscribers receive)
    setTimeout(() => {
      subject.next('Second emission');
      this.addHotResult('Emitted: Second emission');
    }, 2500);
  }

  demonstrateShare(): void {
    this.shareResults = [];
    
    // Cold observable converted to hot using share()
    const coldTimer = timer(0, 500).pipe(
      take(3),
      share(),
      takeUntil(this.destroy$)
    );

    // First subscriber
    coldTimer.subscribe(value => {
      this.shareResults.push(`Sub 1: ${value}`);
    });

    // Second subscriber joins later but shares the same execution
    setTimeout(() => {
      coldTimer.subscribe(value => {
        this.shareResults.push(`Sub 2: ${value}`);
      });
    }, 1000);
  }

  demonstratePublish(): void {
    this.publishResults = [];
    
    // Using shareReplay() - modern alternative to publish()
    const source = timer(0, 500).pipe(
      take(3),
      shareReplay(1),
      takeUntil(this.destroy$)
    );

    // First subscriber
    source.subscribe((value: number) => {
      this.publishResults.push(`Sub 1: ${value}`);
    });

    // Second subscriber joins later but gets replayed values
    setTimeout(() => {
      source.subscribe((value: number) => {
        this.publishResults.push(`Sub 2: ${value}`);
      });
      this.publishResults.push('Sub 2 joined - gets replayed values');
    }, 1000);
  }

  demonstrateMulticast(): void {
    this.multicastResults = [];
    
    // Using share() - modern alternative to multicast()
    const source = timer(0, 500).pipe(
      take(4),
      share(),
      takeUntil(this.destroy$)
    );

    // First subscriber
    source.subscribe((value: number) => {
      this.multicastResults.push(`Sub 1: ${value}`);
    });

    // Second subscriber joins later
    setTimeout(() => {
      source.subscribe((value: number) => {
        this.multicastResults.push(`Sub 2: ${value}`);
      });
      this.multicastResults.push('Sub 2 joined - shares remaining emissions');
    }, 1000);
  }

  private addColdResult(message: string): void {
    this.coldResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addHotResult(message: string): void {
    this.hotResults.push({
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
    this.quizService.generateMCQQuestions('hot-cold-observables')
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
    this.quizService.getInterviewQuestions('hot-cold-observables')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
