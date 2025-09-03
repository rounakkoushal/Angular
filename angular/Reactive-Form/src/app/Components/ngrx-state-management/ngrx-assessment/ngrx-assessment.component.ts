import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

interface MCQQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface InterviewQuestion {
  question: string;
  answer: string;
  example?: string;
}

@Component({
  selector: 'app-ngrx-assessment',
  templateUrl: './ngrx-assessment.component.html',
  styleUrls: ['./ngrx-assessment.component.css']
})
export class NgrxAssessmentComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  
  topics = [
    { key: 'actions', name: 'Actions' },
    { key: 'reducers', name: 'Reducers' },
    { key: 'selectors', name: 'Selectors' },
    { key: 'effects', name: 'Effects' },
    { key: 'store', name: 'Store' },
    { key: 'devtools', name: 'DevTools' }
  ];

  selectedTopic: string = '';
  mcqQuestions: MCQQuestion[] = [];
  interviewQuestions: InterviewQuestion[] = [];
  userAnswers: number[] = [];
  quizSubmitted = false;
  quizScore = 0;
  quizLoading = false;
  completedTopics: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selectTopic('actions'); // Default selection
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectTopic(topicKey: string): void {
    this.selectedTopic = topicKey;
    this.resetQuiz();
    this.loadQuizQuestions();
    this.loadInterviewQuestions();
  }

  loadQuizQuestions(): void {
    this.quizLoading = true;
    this.http.get<{[key: string]: MCQQuestion[]}>('/assets/data/ngrx-quiz-questions.json')
      .pipe(
        map(data => {
          const questions = data[this.selectedTopic] || [];
          return this.shuffleArray(questions);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(questions => {
        this.mcqQuestions = questions;
        this.quizLoading = false;
      });
  }

  loadInterviewQuestions(): void {
    this.http.get<{[key: string]: InterviewQuestion[]}>('/assets/data/ngrx-interview-questions.json')
      .pipe(
        map(data => data[this.selectedTopic] || []),
        takeUntil(this.destroy$)
      )
      .subscribe(questions => {
        this.interviewQuestions = questions;
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
    
    // Mark topic as completed if score is above 60%
    if (this.getPercentage() >= 60 && !this.completedTopics.includes(this.selectedTopic)) {
      this.completedTopics.push(this.selectedTopic);
    }
  }

  resetQuiz(): void {
    this.userAnswers = [];
    this.quizSubmitted = false;
    this.quizScore = 0;
  }

  generateNewQuiz(): void {
    this.resetQuiz();
    this.loadQuizQuestions();
  }

  getPercentage(): number {
    return Math.round((this.quizScore / this.mcqQuestions.length) * 100);
  }

  getTopicName(): string {
    const topic = this.topics.find(t => t.key === this.selectedTopic);
    return topic ? topic.name : '';
  }

  getOverallProgress(): number {
    return Math.round((this.completedTopics.length / this.topics.length) * 100);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}