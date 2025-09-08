import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  progress: {
    completedTopics: string[];
    quizScores: { [topic: string]: number };
    totalScore: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private users: User[] = [
    {
      id: '1',
      email: 'admin@example.com',
      name: 'Admin',
      role: 'admin',
      progress: { completedTopics: [], quizScores: {}, totalScore: 0 }
    },
    {
      id: '2',
      email: 'user1@example.com',
      name: 'User',
      role: 'user',
      progress: { completedTopics: [], quizScores: {}, totalScore: 0 }
    },
    {
      id: '3',
      email: 'user2@example.com',
      name: 'User',
      role: 'user',
      progress: { completedTopics: [], quizScores: {}, totalScore: 0 }
    }
  ];
  baseUrl = "https://localhost:7055/api/Auth/"
  constructor(private router: Router, private http: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  // login(email: string, password: string): Observable<boolean> {
  //   return new Observable(observer => {
  //     const user = this.users.find(u => u.email === email);
  //     if (user && password === 'password') {
  //       this.currentUserSubject.next(user);
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       observer.next(true);
  //     } else {
  //       observer.next(false);
  //     }
  //     observer.complete();
  //   });
  // }

  login(email: string, password: string): Observable<boolean> {
    var data = {
      email: email,
      password: password
    }
    // this.http.post<any>(this.baseUrl, data).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    // return observer.next(true);
    return new Observable(observer => {
      this.http.post<any>(this.baseUrl + 'login', data).subscribe({
        next: (user:any) => {
        if (user) {
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(true);
        } else {
          observer.next(false);
        }
      },
        error: () => {
        observer.next(false);
        alert("Invalid Password...!")
      }

    })

    });

    // return this.http.post<any>(this.baseUrl, data)
  }

  register(userData: { email: string; name: string; password: string }): Observable<boolean> {
    return new Observable(observer => {
      // if (this.users.find(u => u.email === userData.email)) {
      //   observer.next(false);
      // } else {
      // const newUser: User = {
      //   id: Date.now().toString(),
      //   email: userData.email,
      //   name: userData.name,
      //   role: 'user',
      //   progress: { completedTopics: [], quizScores: {}, totalScore: 0 }
      // };
      // this.users.push(newUser);
      this.http.post<any>(this.baseUrl + 'register', userData).subscribe({
        next: (newUser: any) => {
          this.currentUserSubject.next(newUser);
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          observer.next(true);
        },
        error: () => {
          observer.next(false);
          }
      })
    })

  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  getAllUsers(): User[] {
    return this.users.filter(u => u.role === 'user');
  }

  updateUserProgress(topic: string, score: number): void {
    const user = this.currentUserSubject.value;
    if (user) {
      if (!user.progress.completedTopics.includes(topic)) {
        user.progress.completedTopics.push(topic);
      }
      user.progress.quizScores[topic] = score;
      user.progress.totalScore = Object.values(user.progress.quizScores).reduce((a, b) => a + b, 0);

      const userIndex = this.users.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        this.users[userIndex] = user;
      }

      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
  }
}