import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-subjects-multicasting',
  templateUrl: './subjects-multicasting.component.html',
  styleUrls: ['./subjects-multicasting.component.css']
})
export class SubjectsMulticastingComponent implements OnInit, OnDestroy {

  subjectResults: { timestamp: string, message: string }[] = [];
  behaviorResults: { timestamp: string, message: string }[] = [];
  replayResults: { timestamp: string, message: string }[] = [];
  asyncResults: { timestamp: string, message: string }[] = [];
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

  demonstrateSubject(): void {
    this.subjectResults = [];
    const subject = new Subject<string>();
    
    this.addSubjectResult('Creating Subject...');
    
    // Subscribe first observer
    subject.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addSubjectResult(`Observer 1 received: ${value}`);
    });
    
    // Subscribe second observer
    subject.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addSubjectResult(`Observer 2 received: ${value}`);
    });
    
    // Emit values
    setTimeout(() => {
      subject.next('First emission');
      this.addSubjectResult('Emitted: First emission');
    }, 500);
    
    setTimeout(() => {
      subject.next('Second emission');
      this.addSubjectResult('Emitted: Second emission');
    }, 1000);
    
    // Late subscriber (misses previous emissions)
    setTimeout(() => {
      subject.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.addSubjectResult(`Late Observer received: ${value}`);
      });
      this.addSubjectResult('Late observer subscribed');
    }, 1500);
    
    setTimeout(() => {
      subject.next('Third emission');
      this.addSubjectResult('Emitted: Third emission');
    }, 2000);
  }

  demonstrateBehaviorSubject(): void {
    this.behaviorResults = [];
    const behaviorSubject = new BehaviorSubject<string>('Initial Value');
    
    this.addBehaviorResult('Creating BehaviorSubject with initial value...');
    
    // First subscriber gets initial value immediately
    behaviorSubject.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addBehaviorResult(`Observer 1 received: ${value}`);
    });
    
    setTimeout(() => {
      behaviorSubject.next('Updated Value');
      this.addBehaviorResult('Emitted: Updated Value');
    }, 500);
    
    // Late subscriber gets current value immediately
    setTimeout(() => {
      behaviorSubject.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.addBehaviorResult(`Late Observer received: ${value}`);
      });
      this.addBehaviorResult('Late observer subscribed (gets current value)');
    }, 1000);
    
    setTimeout(() => {
      behaviorSubject.next('Final Value');
      this.addBehaviorResult('Emitted: Final Value');
    }, 1500);
  }

  demonstrateReplaySubject(): void {
    this.replayResults = [];
    const replaySubject = new ReplaySubject<string>(2); // Buffer size 2
    
    this.addReplayResult('Creating ReplaySubject with buffer size 2...');
    
    // Emit values before any subscription
    replaySubject.next('Value 1');
    this.addReplayResult('Emitted: Value 1');
    
    replaySubject.next('Value 2');
    this.addReplayResult('Emitted: Value 2');
    
    replaySubject.next('Value 3');
    this.addReplayResult('Emitted: Value 3');
    
    // Late subscriber gets last 2 values
    setTimeout(() => {
      replaySubject.pipe(takeUntil(this.destroy$)).subscribe(value => {
        this.addReplayResult(`Observer received: ${value}`);
      });
      this.addReplayResult('Observer subscribed (gets last 2 values)');
    }, 500);
    
    setTimeout(() => {
      replaySubject.next('Value 4');
      this.addReplayResult('Emitted: Value 4');
    }, 1000);
  }

  demonstrateAsyncSubject(): void {
    this.asyncResults = [];
    const asyncSubject = new AsyncSubject<string>();
    
    this.addAsyncResult('Creating AsyncSubject...');
    
    // Subscribe before emitting
    asyncSubject.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.addAsyncResult(`Observer received: ${value}`);
    });
    
    // Emit multiple values
    setTimeout(() => {
      asyncSubject.next('Value 1');
      this.addAsyncResult('Emitted: Value 1 (not delivered yet)');
    }, 500);
    
    setTimeout(() => {
      asyncSubject.next('Value 2');
      this.addAsyncResult('Emitted: Value 2 (not delivered yet)');
    }, 1000);
    
    setTimeout(() => {
      asyncSubject.next('Final Value');
      this.addAsyncResult('Emitted: Final Value (not delivered yet)');
    }, 1500);
    
    // Complete the subject - only then observers receive the last value
    setTimeout(() => {
      asyncSubject.complete();
      this.addAsyncResult('AsyncSubject completed - observers receive last value');
    }, 2000);
  }

  private addSubjectResult(message: string): void {
    this.subjectResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addBehaviorResult(message: string): void {
    this.behaviorResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addReplayResult(message: string): void {
    this.replayResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addAsyncResult(message: string): void {
    this.asyncResults.push({
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
    this.quizService.generateMCQQuestions('subjects-multicasting')
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
    this.quizService.getInterviewQuestions('subjects-multicasting')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
