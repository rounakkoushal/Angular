import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval, of, merge, combineLatest } from 'rxjs';
import { takeUntil, take, map } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-combining-transforming-observables',
  templateUrl: './combining-transforming-observables.component.html',
  styleUrls: ['./combining-transforming-observables.component.css']
})
export class CombiningTransformingObservablesComponent implements OnInit, OnDestroy {

  mergeResults: { timestamp: string, message: string }[] = [];
  combineResults: { timestamp: string, message: string }[] = [];
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

  demonstrateMerge(): void {
    this.mergeResults = [];
    this.addMergeResult('Starting merge demo...');
    
    // Create two streams with different intervals
    const stream1 = interval(800).pipe(
      take(3),
      map(i => `Stream1-${i}`),
      takeUntil(this.destroy$)
    );
    
    const stream2 = interval(1200).pipe(
      take(3),
      map(i => `Stream2-${i}`),
      takeUntil(this.destroy$)
    );
    
    // Merge the streams
    merge(stream1, stream2).subscribe(value => {
      this.addMergeResult(`Merged: ${value}`);
    });
  }

  demonstrateCombineLatest(): void {
    this.combineResults = [];
    this.addCombineResult('Starting combineLatest demo...');
    
    const names = of('John', 'Jane', 'Bob');
    const ages = of(25, 30, 35);
    
    // Emit names with delay
    const nameStream = names.pipe(
      map((name, index) => {
        setTimeout(() => {
          this.addCombineResult(`Name emitted: ${name}`);
        }, index * 500);
        return name;
      })
    );
    
    // Emit ages with different delay
    const ageStream = ages.pipe(
      map((age, index) => {
        setTimeout(() => {
          this.addCombineResult(`Age emitted: ${age}`);
        }, index * 700 + 200);
        return age;
      })
    );
    
    // Combine latest values
    setTimeout(() => {
      combineLatest([of('Alice', 'Charlie'), of(28, 32)]).subscribe(([name, age]) => {
        this.addCombineResult(`Combined: ${name} is ${age} years old`);
      });
    }, 1000);
  }

  private addMergeResult(message: string): void {
    this.mergeResults.push({
      timestamp: new Date().toLocaleTimeString(),
      message
    });
  }

  private addCombineResult(message: string): void {
    this.combineResults.push({
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
    this.quizService.generateMCQQuestions('combining-transforming-observables')
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
    this.quizService.getInterviewQuestions('combining-transforming-observables')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
