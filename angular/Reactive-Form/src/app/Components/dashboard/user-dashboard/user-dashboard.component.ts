import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../Services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  currentUser: User | null = null;
  totalTopics = 12; // Total available topics

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  getAverageScore(): number {
    if (!this.currentUser?.progress.quizScores) return 0;
    const scores = Object.values(this.currentUser.progress.quizScores);
    if (scores.length === 0) return 0;
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round((average / 10) * 100);
  }

  getProgressPercentage(): number {
    if (!this.currentUser?.progress.completedTopics) return 0;
    return Math.round((this.currentUser.progress.completedTopics.length / this.totalTopics) * 100);
  }

  getRxJSProgress(): number {
    if (!this.currentUser?.progress.completedTopics) return 0;
    const rxjsTopics = this.currentUser.progress.completedTopics.filter(topic => 
      topic.includes('observables') || topic.includes('operators') || topic.includes('subjects') || 
      topic.includes('schedulers') || topic.includes('testing') || topic.includes('error-handling')
    );
    return rxjsTopics.length;
  }

  getNgRxProgress(): number {
    if (!this.currentUser?.progress.completedTopics) return 0;
    const ngrxTopics = this.currentUser.progress.completedTopics.filter(topic => 
      topic.includes('ngrx') || topic.includes('store') || topic.includes('effects') || 
      topic.includes('reducers') || topic.includes('selectors')
    );
    return ngrxTopics.length;
  }

  getQuizScores(): { topic: string; score: number }[] {
    if (!this.currentUser?.progress.quizScores) return [];
    return Object.entries(this.currentUser.progress.quizScores).map(([topic, score]) => ({
      topic: this.formatTopicName(topic),
      score
    }));
  }

  formatTopicName(topic: string): string {
    return topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  getScorePercentage(score: number): number {
    return Math.round((score / 10) * 100);
  }

  getScoreBadgeColor(score: number): string {
    const percentage = (score / 10) * 100;
    if (percentage >= 80) return '#28a745';
    if (percentage >= 60) return '#ffc107';
    return '#dc3545';
  }
}