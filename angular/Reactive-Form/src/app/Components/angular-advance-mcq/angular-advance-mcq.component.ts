import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MCQQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

@Component({
  selector: 'app-angular-advance-mcq',
  templateUrl: './angular-advance-mcq.component.html',
  styleUrls: ['./angular-advance-mcq.component.css']
})
export class AngularAdvanceMcqComponent implements OnInit, OnDestroy {
  questions: MCQQuestion[] = [];
  currentQuestionIndex = 0;
  userAnswers: { [key: number]: number } = {};
  testStarted = false;
  testCompleted = false;
  showAnswers = false;
  score = 0;
  loading = true;
  timeLeft = 3600; // 1 hour in seconds
  timerInterval: any;
  timeUp = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.http.get<any>('/assets/mcq-questions.json').subscribe({
      next: (mcqData) => {
        this.questions = this.getAllQuestions(mcqData).slice(0, 50);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading MCQ questions:', error);
        this.loading = false;
      }
    });
  }

  getAllQuestions(mcqData: any): MCQQuestion[] {
    const allQuestions: MCQQuestion[] = [];
    Object.keys(mcqData).forEach(category => {
      allQuestions.push(...mcqData[category]);
    });
    return this.shuffleArray(allQuestions);
  }

  shuffleArray(array: MCQQuestion[]): MCQQuestion[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  get currentQuestion(): MCQQuestion | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  startTest(): void {
    this.testStarted = true;
    this.currentQuestionIndex = 0;
    this.userAnswers = {};
    this.testCompleted = false;
    this.showAnswers = false;
    this.score = 0;
    this.timeLeft = 3600;
    this.timeUp = false;
    this.startTimer();
  }

  selectAnswer(optionIndex: number): void {
    this.userAnswers[this.currentQuestionIndex] = optionIndex;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitTest(): void {
    this.calculateScore();
    this.testCompleted = true;
    this.testStarted = false;
    this.stopTimer();
  }

  calculateScore(): void {
    this.score = 0;
    this.questions.forEach((question, index) => {
      if (this.userAnswers[index] === question.correct) {
        this.score++;
      }
    });
  }

  retakeTest(): void {
    this.testStarted = false;
    this.testCompleted = false;
    this.showAnswers = false;
    this.userAnswers = {};
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.timeLeft = 3600;
    this.timeUp = false;
    this.questions = this.shuffleArray(this.questions);
  }

  viewAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }

  getAnsweredCount(): number {
    return Object.keys(this.userAnswers).length;
  }

  getProgressPercentage(): number {
    return Math.round((this.getAnsweredCount() / this.questions.length) * 100);
  }

  getPercentage(): number {
    return Math.round((this.score / this.questions.length) * 100);
  }

  getGrade(): string {
    const percentage = this.getPercentage();
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  }

  getGradeColor(): string {
    const percentage = this.getPercentage();
    if (percentage >= 80) return '#28a745';
    if (percentage >= 60) return '#ffc107';
    return '#dc3545';
  }

  getResultAlertClass(): string {
    const percentage = this.getPercentage();
    if (percentage >= 80) return 'alert-success';
    if (percentage >= 60) return 'alert-warning';
    return 'alert-danger';
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.timeUp = true;
        this.submitTest();
      }
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  getFormattedTime(): string {
    const hours = Math.floor(this.timeLeft / 3600);
    const minutes = Math.floor((this.timeLeft % 3600) / 60);
    const seconds = this.timeLeft % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}