import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface MCQQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  generateMCQQuestions(topic: string): Observable<MCQQuestion[]> {
    return this.http.get<{[key: string]: MCQQuestion[]}>('/assets/data/quiz-questions.json').pipe(
      map(data => {
        const questions = data[topic] || [];
        return this.shuffleArray(questions).slice(0, 10);
      })
    );
  } 

  getInterviewQuestions(topic: string): Observable<any[]> {
    return this.http.get<{[key: string]: any[]}>('/assets/data/interview-questions.json').pipe(
      map(data => data[topic] || [])
    );
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