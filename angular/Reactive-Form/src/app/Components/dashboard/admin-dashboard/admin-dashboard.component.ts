import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../Services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  currentUser: User | null = null;
  allUsers: User[] = [];
  searchTerm = '';
  totalTopics = 12;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.allUsers = this.authService.getAllUsers();
  }

  logout(): void {
    this.authService.logout();
  }

  getActiveLearners(): number {
    return this.allUsers.filter(user => user.progress.completedTopics.length > 0).length;
  }

  getAverageCompletion(): number {
    if (this.allUsers.length === 0) return 0;
    const totalCompletion = this.allUsers.reduce((sum, user) => 
      sum + (user.progress.completedTopics.length / this.totalTopics) * 100, 0);
    return Math.round(totalCompletion / this.allUsers.length);
  }

  getTopPerformers(): number {
    return this.allUsers.filter(user => this.getUserAverageScore(user) >= 80).length;
  }

  getTotalQuizzes(): number {
    return this.allUsers.reduce((sum, user) => 
      sum + Object.keys(user.progress.quizScores).length, 0);
  }

  getSystemAverageScore(): number {
    const allScores = this.allUsers.flatMap(user => Object.values(user.progress.quizScores));
    if (allScores.length === 0) return 0;
    const average = allScores.reduce((a, b) => a + b, 0) / allScores.length;
    return Math.round((average / 10) * 100);
  }

  getCompletionRate(): number {
    if (this.allUsers.length === 0) return 0;
    const completedUsers = this.allUsers.filter(user => 
      user.progress.completedTopics.length === this.totalTopics).length;
    return Math.round((completedUsers / this.allUsers.length) * 100);
  }

  getFilteredUsers(): User[] {
    if (!this.searchTerm) return this.allUsers;
    return this.allUsers.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getUserAverageScore(user: User): number {
    const scores = Object.values(user.progress.quizScores);
    if (scores.length === 0) return 0;
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round((average / 10) * 100);
  }

  getUserProgressPercentage(user: User): number {
    return Math.round((user.progress.completedTopics.length / this.totalTopics) * 100);
  }

  getScoreBadgeColor(score: number): string {
    if (score >= 80) return '#28a745';
    if (score >= 60) return '#ffc107';
    return '#dc3545';
  }

  viewUserDetails(user: User): void {
    alert(`User Details:\nName: ${user.name}\nEmail: ${user.email}\nCompleted Topics: ${user.progress.completedTopics.join(', ')}\nTotal Score: ${user.progress.totalScore}`);
  }

  resetUserProgress(user: User): void {
    if (confirm(`Are you sure you want to reset progress for ${user.name}?`)) {
      user.progress = { completedTopics: [], quizScores: {}, totalScore: 0 };
      alert('User progress has been reset.');
    }
  }

  exportUserData(): void {
    const data = JSON.stringify(this.allUsers, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-data.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  resetAllProgress(): void {
    if (confirm('Are you sure you want to reset ALL user progress? This cannot be undone.')) {
      this.allUsers.forEach(user => {
        user.progress = { completedTopics: [], quizScores: {}, totalScore: 0 };
      });
      alert('All user progress has been reset.');
    }
  }
}