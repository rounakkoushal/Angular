-- Complete Data Insert Script for Angular Advance Learning Platform

-- Insert Topics
INSERT INTO Topics (Name, Description, Category, Slug, IsActive, CreatedAt) VALUES
('Higher Order Observables', 'Learn about observables that emit other observables and flattening operators', 'RxJS', 'higher-order-observables', 1, GETUTCDATE()),
('Custom Operators', 'Create and use custom RxJS operators for reusable logic', 'RxJS', 'custom-operators', 1, GETUTCDATE()),
('Error Handling', 'Handle errors in RxJS streams effectively with catchError and retry', 'RxJS', 'error-handling', 1, GETUTCDATE()),
('Schedulers', 'Control execution context and timing with RxJS schedulers', 'RxJS', 'schedulers', 1, GETUTCDATE()),
('Hot Cold Observables', 'Understand the difference between hot and cold observables', 'RxJS', 'hot-cold-observables', 1, GETUTCDATE()),
('Subjects Multicasting', 'Use subjects for multicasting and state management', 'RxJS', 'subjects-multicasting', 1, GETUTCDATE()),
('Backpressure Flow Control', 'Manage data flow and backpressure with throttle and debounce', 'RxJS', 'backpressure-flow-control', 1, GETUTCDATE()),
('Testing Marble Diagrams', 'Test RxJS code using marble diagrams and TestScheduler', 'RxJS', 'testing-marble-diagrams', 1, GETUTCDATE()),
('Combining Transforming Observables', 'Combine and transform multiple observables with merge, zip, scan', 'RxJS', 'combining-transforming-observables', 1, GETUTCDATE()),
('Actions', 'Define and dispatch NgRx actions to describe events', 'NgRx', 'actions', 1, GETUTCDATE()),
('Reducers', 'Create pure functions to handle state changes in NgRx', 'NgRx', 'reducers', 1, GETUTCDATE()),
('Selectors', 'Select and derive state efficiently with memoized selectors', 'NgRx', 'selectors', 1, GETUTCDATE()),
('Effects', 'Handle side effects like HTTP requests in NgRx', 'NgRx', 'effects', 1, GETUTCDATE()),
('Store', 'Manage application state with NgRx Store', 'NgRx', 'store', 1, GETUTCDATE()),
('DevTools', 'Debug NgRx applications with Redux DevTools', 'NgRx', 'devtools', 1, GETUTCDATE()),
('Dynamic Reactive Forms', 'Build dynamic forms with Angular reactive forms', 'Forms', 'dynamic-reactive-forms', 1, GETUTCDATE()),
('Server Side Rendering', 'Implement SSR with Angular Universal for SEO and performance', 'SSR', 'server-side-rendering', 1, GETUTCDATE()),
('Testing Jasmine Karma', 'Test Angular applications with Jasmine and Karma', 'Testing', 'testing-jasmine-karma', 1, GETUTCDATE()),
('Advanced RxJS', 'Advanced RxJS patterns and techniques', 'RxJS', 'advanced-rxjs', 1, GETUTCDATE()),
('NgRx State Management', 'Complete NgRx state management patterns', 'NgRx', 'ngrx-state-management', 1, GETUTCDATE());

-- Insert Questions for Higher Order Observables (Topic ID: 1)
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('What is the primary characteristic of a higher-order observable?', '["It emits primitive values", "It emits other observables", "It has higher priority", "It runs on main thread"]', 1, 'Higher-order observables emit other observables as their values, creating nested observable streams.', 1, 'Medium', 1, GETUTCDATE()),
('Which operator cancels previous inner observables when a new one arrives?', '["mergeMap", "switchMap", "concatMap", "exhaustMap"]', 1, 'switchMap cancels the previous inner observable subscription when a new value arrives.', 1, 'Medium', 1, GETUTCDATE()),
('What does concatMap guarantee that mergeMap doesn''t?', '["Better performance", "Order preservation", "Error handling", "Memory efficiency"]', 1, 'concatMap maintains the order of emissions by processing inner observables sequentially.', 1, 'Hard', 1, GETUTCDATE()),
('When is exhaustMap most useful?', '["Search functionality", "Data transformation", "Preventing duplicate operations", "Error recovery"]', 2, 'exhaustMap ignores new emissions while current inner observable is active, preventing duplicates.', 1, 'Medium', 1, GETUTCDATE()),
('What happens with mergeMap when multiple inner observables emit simultaneously?', '["Only first emission is kept", "Emissions are queued", "All emissions are merged", "Last emission overwrites others"]', 2, 'mergeMap allows all inner observables to emit concurrently and merges all their emissions.', 1, 'Easy', 1, GETUTCDATE()),
('Which scenario is ideal for switchMap?', '["File upload queue", "Real-time search", "Sequential API calls", "Login attempts"]', 1, 'switchMap is perfect for search as it cancels outdated requests when new search terms arrive.', 1, 'Medium', 1, GETUTCDATE()),
('What is the main memory concern with mergeMap?', '["CPU usage", "Multiple active subscriptions", "Slow emissions", "Error propagation"]', 1, 'mergeMap can create many concurrent subscriptions, potentially leading to memory leaks.', 1, 'Hard', 1, GETUTCDATE()),
('How does exhaustMap handle rapid successive emissions?', '["Processes all", "Cancels previous", "Ignores new ones", "Queues them"]', 2, 'exhaustMap ignores new emissions while the current inner observable is still active.', 1, 'Medium', 1, GETUTCDATE()),
('What''s the relationship between flatMap and mergeMap?', '["flatMap is deprecated", "They are identical", "flatMap is faster", "mergeMap handles errors better"]', 1, 'flatMap and mergeMap are aliases - they perform exactly the same operation.', 1, 'Easy', 1, GETUTCDATE()),
('Which operator should you use for a button that triggers HTTP requests?', '["mergeMap", "switchMap", "concatMap", "exhaustMap"]', 3, 'exhaustMap prevents multiple simultaneous requests from rapid button clicks.', 1, 'Medium', 1, GETUTCDATE());

-- Insert Questions for Dynamic Reactive Forms (Topic ID: 16)
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

-- Insert Questions for Server Side Rendering (Topic ID: 17)
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('What is the primary purpose of Angular Universal?', '["Client-side caching", "Faster routing", "Server-side rendering for performance and SEO", "API mocking"]', 2, 'Angular Universal renders Angular apps on the server for faster initial load and SEO.', 17, 'Easy', 1, GETUTCDATE()),
('Which server platform is used by default with Angular Universal?', '["PHP", "Flask", "Node.js", "Django"]', 2, 'Angular Universal uses Node.js as the default server platform.', 17, 'Easy', 1, GETUTCDATE()),
('During SSR, a component is trying to access window. What''s the best approach to avoid error?', '["Use window as usual", "Wrap in try/catch", "Inject PLATFORM_ID and check if browser", "Delay usage via setTimeout"]', 2, 'PLATFORM_ID allows conditional logic to check for browser environment.', 17, 'Medium', 1, GETUTCDATE()),
('What Angular CLI command adds SSR support to an existing project?', '["ng generate universal", "ng add @nguniversal/express-engine", "ng setup ssr", "ng enable ssr"]', 1, 'ng add @nguniversal/express-engine sets up SSR with Express.', 17, 'Medium', 1, GETUTCDATE()),
('Which Angular module is critical for SSR support in the root module?', '["BrowserAnimationsModule", "HttpClientModule", "ServerModule", "TransferHttpCacheModule"]', 2, 'ServerModule enables Angular to run on the server.', 17, 'Medium', 1, GETUTCDATE()),
('To enable SEO crawling, which SSR feature helps transfer state between server and client?', '["DomSanitizer", "HttpClientTransfer", "TransferState", "MetaTagResolver"]', 2, 'TransferState transfers data from server to client to avoid duplicate HTTP calls.', 17, 'Hard', 1, GETUTCDATE()),
('When deploying SSR app on Firebase, what is typically used?', '["Netlify", "Express Server on Cloud Functions", "GitHub Pages", "Nginx"]', 1, 'Firebase Cloud Functions run Express server for SSR.', 17, 'Medium', 1, GETUTCDATE()),
('Which method is used to dynamically generate meta tags in SSR for SEO?', '["Meta.set()", "SEOService", "Meta.updateTag()", "Meta.addMetaTag()"]', 2, 'Meta.updateTag() updates or adds meta tags dynamically.', 17, 'Medium', 1, GETUTCDATE()),
('Which lifecycle hook does NOT run during server-side rendering?', '["ngOnInit", "ngAfterViewInit", "ngOnDestroy", "constructor"]', 1, 'ngAfterViewInit depends on browser DOM and doesn''t run during SSR.', 17, 'Hard', 1, GETUTCDATE()),
('Which benefit does SSR provide over static HTML export in Angular?', '["Smaller JS bundle", "Interactive components", "Dynamic data pre-rendering for crawlers", "Easier routing config"]', 2, 'SSR allows dynamic content rendering that static export cannot provide.', 17, 'Medium', 1, GETUTCDATE());

-- Insert Questions for Testing Jasmine Karma (Topic ID: 18)
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('Which Jasmine function defines a test suite?', '["test()", "describe()", "it()", "suite()"]', 1, 'describe() groups related tests into a suite.', 18, 'Easy', 1, GETUTCDATE()),
('Which is the correct syntax to test if a variable equals 5?', '["expect(5).toBeEqual(5)", "should(5).equal(5)", "expect(5).toEqual(5)", "assert(5 == 5)"]', 2, 'toEqual() checks for deep equality.', 18, 'Easy', 1, GETUTCDATE()),
('What is the purpose of TestBed.configureTestingModule()?', '["Render template", "Register app routes", "Configure test module for a component/service", "Inject styles"]', 2, 'It sets up testing environment with declarations and providers.', 18, 'Medium', 1, GETUTCDATE()),
('You need to test async code that returns an Observable. Which utilities help?', '["fakeAsync, tick()", "setInterval()", "waitUntil()", "Observable.of()"]', 0, 'fakeAsync and tick() allow testing async observables synchronously.', 18, 'Hard', 1, GETUTCDATE()),
('Which tool runs Jasmine tests in Angular?', '["Mocha", "NUnit", "Karma", "Chai"]', 2, 'Karma is the test runner used with Jasmine.', 18, 'Easy', 1, GETUTCDATE()),
('How can you simulate a click event in Angular unit testing?', '["button.click()", "dispatchEvent(new Event(''click''))", "simulateClick(button)", "trigger(''click'')"]', 1, 'dispatchEvent allows simulating DOM events in tests.', 18, 'Medium', 1, GETUTCDATE()),
('What is ComponentFixture primarily used for?', '["Replace test bed", "Render backend calls", "Access DOM and component instance", "Log console output"]', 2, 'ComponentFixture allows querying and manipulating component and DOM.', 18, 'Medium', 1, GETUTCDATE()),
('Why would you use spyOn() in Angular testing?', '["To mock observables", "To replace async functions", "To mock and track function calls", "To simulate network delay"]', 2, 'spyOn mocks functions and verifies calls.', 18, 'Medium', 1, GETUTCDATE()),
('Which file typically configures Karma?', '["karma.conf.js", "test.config.ts", "karma.js", "test-runner.json"]', 0, 'karma.conf.js is the default Karma config file.', 18, 'Easy', 1, GETUTCDATE()),
('How do you ensure all public methods of a service are tested?', '["Run unit tests", "Use ESLint", "Check test coverage report", "Enable dev mode"]', 2, 'Test coverage reports show what code is exercised by tests.', 18, 'Medium', 1, GETUTCDATE());

-- Insert Questions for NgRx State Management (Topic ID: 20)
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('What does an NgRx action represent?', '["Component state", "Side effect", "Description of an event", "API payload"]', 2, 'Actions describe events that change state.', 20, 'Easy', 1, GETUTCDATE()),
('Which NgRx piece listens for actions and updates the state?', '["Selector", "Effect", "Reducer", "Store"]', 2, 'Reducers handle actions to update state.', 20, 'Easy', 1, GETUTCDATE()),
('What is the purpose of a selector in NgRx?', '["Update backend", "Access component DOM", "Select state slices efficiently", "Trigger reducers"]', 2, 'Selectors provide memoized access to parts of the store.', 20, 'Medium', 1, GETUTCDATE()),
('Which NgRx concept is best for handling API side effects?', '["Store", "Action", "Selector", "Effect"]', 3, 'Effects handle side effects like HTTP requests.', 20, 'Medium', 1, GETUTCDATE()),
('How do you dispatch an action in a component?', '["this.store.next(action)", "this.store.run(action)", "this.store.dispatch(action)", "dispatch(action)"]', 2, 'dispatch() sends actions to the store.', 20, 'Easy', 1, GETUTCDATE()),
('Which RxJS operator is commonly used inside effects to transform actions?', '["catchError()", "mergeMap()", "retry()", "scan()"]', 1, 'mergeMap handles inner observable flattening.', 20, 'Medium', 1, GETUTCDATE()),
('How is immutability maintained in reducers?', '["Using deepClone()", "Avoid direct mutation, use spread operators", "JSON.stringify()", "By freezing state"]', 1, 'Reducers use spread operators or immutable techniques to avoid mutations.', 20, 'Medium', 1, GETUTCDATE()),
('How do you enable debugging of store changes in NgRx DevTools?', '["Call enableDevMode()", "Enable Redux logger", "Import StoreDevtoolsModule.instrument()", "Enable CLI debug mode"]', 2, 'StoreDevtoolsModule.instrument() integrates the Redux DevTools.', 20, 'Medium', 1, GETUTCDATE()),
('Which is NOT a valid NgRx entity?', '["Action", "Selector", "Observer", "Reducer"]', 2, 'Observer is an RxJS concept but not part of NgRx entities.', 20, 'Easy', 1, GETUTCDATE()),
('In which NgRx file would you most likely define createFeatureSelector?', '["actions.ts", "reducers.ts", "selectors.ts", "effects.ts"]', 2, 'Selectors are usually declared in selectors.ts.', 20, 'Easy', 1, GETUTCDATE());

-- Insert Questions for Advanced RxJS (Topic ID: 19)
INSERT INTO Questions (QuestionText, Options, CorrectAnswer, Explanation, TopicId, Difficulty, IsActive, CreatedAt) VALUES
('What is a higher-order Observable?', '["Observable with high priority", "Observable emitting other Observables", "Observable used in HTTP", "Observable that runs in parallel"]', 1, 'Higher-order observables emit other observables as their values.', 19, 'Medium', 1, GETUTCDATE()),
('Which operator flattens inner Observables in order of their arrival?', '["switchMap()", "mergeMap()", "concatMap()", "exhaustMap()"]', 2, 'concatMap queues inner observables and subscribes in order.', 19, 'Medium', 1, GETUTCDATE()),
('What is the main difference between hot and cold observables?', '["Cold observables are faster", "Hot observables share emissions", "Cold observables use memory", "Hot ones are only async"]', 1, 'Hot observables emit to multiple subscribers simultaneously.', 19, 'Medium', 1, GETUTCDATE()),
('How do you create a custom RxJS operator?', '["Use createOperator()", "Extend Observable", "Return a function that takes and returns Observable", "Use pipe() method"]', 2, 'Custom operators are functions that take and return observables.', 19, 'Hard', 1, GETUTCDATE()),
('Which operator would you use to handle errors and continue the stream?', '["retry()", "catchError()", "finalize()", "tap()"]', 1, 'catchError() handles errors and can return a fallback observable.', 19, 'Medium', 1, GETUTCDATE()),
('What does the share() operator do?', '["Splits observable into multiple streams", "Makes cold observable hot and multicasts", "Shares data between components", "Creates shared memory"]', 1, 'share() converts cold observables to hot and multicasts to multiple subscribers.', 19, 'Medium', 1, GETUTCDATE()),
('Which operator emits only the last value before completion?', '["first()", "take(1)", "last()", "takeLast(1)"]', 2, 'last() emits only the final value before the observable completes.', 19, 'Easy', 1, GETUTCDATE()),
('What is the purpose of the startWith() operator?', '["Start observable execution", "Emit initial value before source emissions", "Start timing measurements", "Initialize observable state"]', 1, 'startWith() prepends specified values to the beginning of an observable sequence.', 19, 'Easy', 1, GETUTCDATE()),
('Which operator would you use to combine the latest values from multiple observables?', '["merge()", "concat()", "combineLatest()", "zip()"]', 2, 'combineLatest() emits when any source observable emits, combining latest values.', 19, 'Medium', 1, GETUTCDATE()),
('What does the distinctUntilChanged() operator do?', '["Removes all duplicates", "Emits only when current value differs from previous", "Changes distinct values", "Filters unique values only"]', 1, 'distinctUntilChanged() only emits when the current value is different from the previous value.', 19, 'Easy', 1, GETUTCDATE());

-- Insert Admin User
INSERT INTO Users (Name, Email, PasswordHash, Role, CreatedAt, IsActive) VALUES
('Admin User', 'admin@example.com', 'AQAAAAEAACcQAAAAEBzJZkuEJmkQjw8pTkVJHkL8vQ==', 'Admin', GETUTCDATE(), 1),
('Demo User', 'user@example.com', 'AQAAAAEAACcQAAAAEBzJZkuEJmkQjw8pTkVJHkL8vQ==', 'User', GETUTCDATE(), 1);

-- Note: Password hash is for 'password' - use proper password hashing in production