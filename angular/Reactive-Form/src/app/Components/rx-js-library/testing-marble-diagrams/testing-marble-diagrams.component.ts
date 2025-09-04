import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { MCQQuestion, QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-testing-marble-diagrams',
  templateUrl: './testing-marble-diagrams.component.html',
  styleUrls: ['./testing-marble-diagrams.component.css']
})
export class TestingMarbleDiagramsComponent implements OnInit, OnDestroy {

  basicMarbleResults: { message: string, success: boolean }[] = [];
  operatorTestResults: { message: string, success: boolean }[] = [];
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

  demonstrateBasicMarble(): void {
    this.basicMarbleResults = [];
    
    // Simulate basic marble test results
    try {
      this.basicMarbleResults.push({ message: 'Testing marble syntax a-b-c|', success: true });
      this.basicMarbleResults.push({ message: 'Emission timing verified', success: true });
      this.basicMarbleResults.push({ message: 'Completion signal detected', success: true });
      this.basicMarbleResults.push({ message: 'Basic marble test passed', success: true });
    } catch (error) {
      this.basicMarbleResults.push({ message: 'Test failed: ' + error, success: false });
    }
  }

  demonstrateOperatorTesting(): void {
    this.operatorTestResults = [];
    
    // Simulate operator testing results
    try {
      this.operatorTestResults.push({ message: 'Testing map operator', success: true });
      this.operatorTestResults.push({ message: 'Input: a-b-c|', success: true });
      this.operatorTestResults.push({ message: 'Expected: A-B-C|', success: true });
      this.operatorTestResults.push({ message: 'Actual: A-B-C|', success: true });
      this.operatorTestResults.push({ message: 'Map operator test passed', success: true });
      
      setTimeout(() => {
        this.operatorTestResults.push({ message: 'Testing filter operator', success: true });
        this.operatorTestResults.push({ message: 'Filter test passed', success: true });
      }, 1000);
    } catch (error) {
      this.operatorTestResults.push({ message: 'Operator test failed: ' + error, success: false });
    }
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
    this.quizService.generateMCQQuestions('testing-marble-diagrams')
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
    this.quizService.getInterviewQuestions('testing-marble-diagrams')
      .pipe(takeUntil(this.destroy$))
      .subscribe(questions => {
        this.interviewQuestions = questions;
      });
  }
}
