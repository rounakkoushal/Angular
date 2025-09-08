# Angular Advance API - Backend Setup

## Prerequisites
- .NET 8.0 SDK
- SQL Server or SQL Server LocalDB
- Visual Studio or VS Code

## Setup Instructions

### 1. Navigate to Backend Directory
```bash
cd Backend
```

### 2. Restore NuGet Packages
```bash
dotnet restore
```

### 3. Update Database Connection String
Edit `appsettings.json` and update the connection string if needed:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=AngularAdvanceDB;Trusted_Connection=true;MultipleActiveResultSets=true"
  }
}
```

### 4. Create and Run Migrations
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### 5. Seed Database with Sample Data
Run the SQL script in `Data/SeedData.sql` against your database to insert:
- Topics (20 learning topics)
- Sample Questions (10 questions for Dynamic Reactive Forms)
- Admin User (admin@example.com / password)

### 6. Run the API
```bash
dotnet run
```

The API will be available at:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`
- Swagger UI: `https://localhost:5001/swagger`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Quiz
- `GET /api/quiz/questions?topicId={id}&count={number}` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz answers

### User Management
- `GET /api/user/{userId}/progress` - Get user progress
- `GET /api/user/all` - Get all users (admin)
- `POST /api/user/{userId}/reset-progress` - Reset user progress

## Database Schema

### Tables
1. **Users** - User authentication and profile
2. **Topics** - Learning topics/modules
3. **Questions** - MCQ questions with options
4. **QuizAttempts** - Quiz session tracking
5. **QuizAnswers** - Individual question responses
6. **UserProgress** - Learning progress tracking

## Next Steps
1. Add more questions to the database using the provided structure
2. Update Angular services to use API endpoints
3. Implement JWT authentication for better security
4. Add input validation and error handling
5. Add logging and monitoring