-- Insert Topics
INSERT INTO Topics (Name, Description, Category, Slug, IsActive, CreatedAt) VALUES
('Higher Order Observables', 'Learn about observables that emit other observables', 'RxJS', 'higher-order-observables', 1, GETUTCDATE()),
('Custom Operators', 'Create and use custom RxJS operators', 'RxJS', 'custom-operators', 1, GETUTCDATE()),
('Error Handling', 'Handle errors in RxJS streams effectively', 'RxJS', 'error-handling', 1, GETUTCDATE()),
('Schedulers', 'Control execution context with RxJS schedulers', 'RxJS', 'schedulers', 1, GETUTCDATE()),
('Hot Cold Observables', 'Understand the difference between hot and cold observables', 'RxJS', 'hot-cold-observables', 1, GETUTCDATE()),
('Subjects Multicasting', 'Use subjects for multicasting in RxJS', 'RxJS', 'subjects-multicasting', 1, GETUTCDATE()),
('Backpressure Flow Control', 'Manage data flow and backpressure', 'RxJS', 'backpressure-flow-control', 1, GETUTCDATE()),
('Testing Marble Diagrams', 'Test RxJS code using marble diagrams', 'RxJS', 'testing-marble-diagrams', 1, GETUTCDATE()),
('Combining Transforming Observables', 'Combine and transform multiple observables', 'RxJS', 'combining-transforming-observables', 1, GETUTCDATE()),
('Actions', 'Define and dispatch NgRx actions', 'NgRx', 'actions', 1, GETUTCDATE()),
('Reducers', 'Create pure functions to handle state changes', 'NgRx', 'reducers', 1, GETUTCDATE()),
('Selectors', 'Select and derive state efficiently', 'NgRx', 'selectors', 1, GETUTCDATE()),
('Effects', 'Handle side effects in NgRx', 'NgRx', 'effects', 1, GETUTCDATE()),
('Store', 'Manage application state with NgRx Store', 'NgRx', 'store', 1, GETUTCDATE()),
('DevTools', 'Debug NgRx applications with DevTools', 'NgRx', 'devtools', 1, GETUTCDATE()),
('Dynamic Reactive Forms', 'Build dynamic forms with Angular reactive forms', 'Forms', 'dynamic-reactive-forms', 1, GETUTCDATE()),
('Server Side Rendering', 'Implement SSR with Angular Universal', 'SSR', 'server-side-rendering', 1, GETUTCDATE()),
('Testing Jasmine Karma', 'Test Angular applications with Jasmine and Karma', 'Testing', 'testing-jasmine-karma', 1, GETUTCDATE()),
('Advanced RxJS', 'Advanced RxJS patterns and techniques', 'RxJS', 'advanced-rxjs', 1, GETUTCDATE()),
('NgRx State Management', 'Complete NgRx state management patterns', 'NgRx', 'ngrx-state-management', 1, GETUTCDATE());

-- Insert Questions for Dynamic Reactive Forms
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('You''re building a dynamic form using FormBuilder. Which method would you use to dynamically add new FormControls at runtime?', '["formGroup.addControl()", "formArray.push()", "formBuilder.insertControl()", "formGroup.appendControl()"]', 1, 'To dynamically add controls to a FormArray, use the push() method.', 16, 'Medium', 1, GETUTCDATE()),
('A nested FormGroup inside your reactive form is not updating its validation status. What''s the likely issue?', '["Not imported FormsModule", "Not calling markAsDirty()", "Not calling updateValueAndValidity()", "FormGroup must be set as readonly"]', 2, 'Calling updateValueAndValidity() triggers validation recalculation.', 16, 'Medium', 1, GETUTCDATE()),
('You have a form control that should validate asynchronously if a username is available. Where should this validator be registered?', '["As a custom directive", "In the template using asyncValidator", "In the component via setValidators()", "In the form control''s constructor as an async validator"]', 3, 'Async validators are typically passed as the third argument to FormControl constructor.', 16, 'Hard', 1, GETUTCDATE()),
('A FormArray is used to manage multiple phone numbers. How do you add a new phone number control?', '["formArray.add(new FormControl())", "formArray.push(new FormControl())", "formArray.append(FormControl)", "formArray.insertControl(FormControl)"]', 1, 'FormArray has a push() method to add new controls.', 16, 'Easy', 1, GETUTCDATE()),
('What RxJS operator would you use to respond to form value changes but avoid triggering on every keystroke?', '["map()", "tap()", "debounceTime()", "takeUntil()"]', 2, 'debounceTime() waits for a pause in events before emitting.', 16, 'Medium', 1, GETUTCDATE()),
('You''re binding a form to an API response. What''s the best way to patch only available values to a reactive form?', '["formGroup.reset()", "formGroup.setValue()", "formGroup.patchValue()", "formGroup.loadValues()"]', 2, 'patchValue updates only the specified controls without requiring all values.', 16, 'Easy', 1, GETUTCDATE()),
('In Angular 16, what feature helps make reactive forms more type-safe?', '["Strict mode", "Signals", "Typed Forms", "Zone.js"]', 2, 'Angular 16 introduced typed reactive forms for type safety.', 16, 'Medium', 1, GETUTCDATE()),
('You want to show validation errors only after the user has interacted with a field. What should you check?', '["formControl.valid", "formControl.touched && formControl.invalid", "formControl.dirty && formControl.valid", "formControl.pending"]', 1, 'Touched indicates user interacted, and invalid indicates validation failed.', 16, 'Easy', 1, GETUTCDATE()),
('Your form is not updating on UI even though data is patched. What could be the cause?', '["Missing change detection cycle", "Invalid FormBuilder import", "Using setValue() instead of patchValue()", "Form was not enabled"]', 0, 'UI updates may require triggering Angular''s change detection.', 16, 'Hard', 1, GETUTCDATE()),
('How do you disable all controls in a reactive form?', '["formGroup.clear()", "formGroup.disable()", "formGroup.reset(true)", "formGroup.readonly()"]', 1, 'Calling disable() disables all controls in the form group.', 16, 'Easy', 1, GETUTCDATE());

-- Insert Admin User
INSERT INTO Users (Name, Email, PasswordHash, Role, CreatedAt, IsActive) VALUES
('Admin User', 'admin@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', GETUTCDATE(), 1);

-- Note: Password hash is for 'password' - you should use proper password hashing in production