# Angular Component and Service Generation Rules

## Component Generation
- Always use `ng g c component-name --skip-tests` when creating new components
- Never generate spec.ts test files for components

## Service Generation  
- Always use `ng g s service-name --skip-tests` when creating new services
- Never generate spec.ts test files for services

## Examples
```bash
ng g c Components/feature/my-component --skip-tests
ng g s Service/my-service --skip-tests
```