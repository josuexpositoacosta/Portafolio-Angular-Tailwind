# AGENTS.md - Development Guidelines

This file contains guidelines for agents working on this Angular + Tailwind portfolio project.

## Build / Lint / Test Commands

### Development
```bash
npm start          # Start dev server (ng serve)
npm run watch      # Build in watch mode (development)
```

### Build
```bash
npm run build      # Production build (ng build)
```

### Testing
```bash
npm test           # Run all tests (uses Vitest with Angular)
```

To run a **single test file**, use Vitest's filter flag:
```bash
npm test -- --filter="skills.spec"
# or with pattern matching:
npm test -- --filter="skills"
```

To run tests in watch mode:
```bash
npm test -- --watch
```

To run tests with coverage:
```bash
npm test -- --coverage
```

### Linting
This project does not have ESLint configured. Code formatting is handled by Prettier.

---

## Code Style Guidelines

### General Principles
- This is an **Angular 21** standalone components project
- Uses **Tailwind CSS v4** for styling
- **TypeScript strict mode** is enabled in tsconfig.json

### TypeScript Configuration
The project uses strict TypeScript settings:
- `strict: true`
- `noImplicitOverride: true`
- `noPropertyAccessFromIndexSignature: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`

### Formatting (Prettier)
Prettier is configured in package.json:
- Print width: 100 characters
- Single quotes for TypeScript and JavaScript
- HTML files use Angular parser

EditorConfig (.editorconfig):
- 2-space indentation
- UTF-8 charset
- Single quotes for `.ts` files

### Angular Component Structure

This project uses **standalone components** in **single file** format (`.ts` contains the component decorator):

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class ExampleComponent {
  // component logic
}
```

### Imports

**TypeScript imports** (top of file):
- Use path aliases if available
- Group external Angular imports first, then local imports
- Example:
```typescript
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
```

**Component imports** (in @Component decorator):
- Every component used in the template MUST be declared in the `imports` array
- This is required for Angular standalone components

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase (file: `kebab-case.ts`) | `Skills`, `Navbar`, `ProjectCard` |
| Interfaces | PascalCase | `SkillCategory`, `Project` |
| Methods/Properties | camelCase | `getProjects()`, `skillCategories` |
| CSS Classes | Tailwind utilities + kebab-case custom classes | `bg-gray-900`, `text-center` |

### Component File Structure

 follow this structureEach component should:
```
src/app/components/[name]/
  ├── [name].ts        # Component class + interface definitions
  ├── [name].html      # Template
  ├── [name].css       # Component-specific styles
  └── [name].spec.ts   # Tests
```

### Standalone Components

- Always use `@Component` decorator with standalone: true (default in Angular 17+)
- Declare imports in the `imports` array for child components used in template
- No NgModule declarations needed

### Template Guidelines

- Use self-closing tags for components: `<app-navbar />`
- Prefer `@for` loops over `*ngFor` in Angular 17+ templates
- Use attribute binding for dynamic values: `[value]="expression"`

### CSS / Tailwind

- This project uses **Tailwind CSS v4** with `@import "tailwindcss"`
- Define custom theme variables in `src/styles.css` using `@theme` block
- Use Tailwind utilities for all styling; component CSS files are for overrides only

### Error Handling

- Use try-catch for async operations
- Let TypeScript enforce null checks (strict mode is enabled)
- Handle errors in services with proper typing

### Testing

Tests use Vitest with Angular's TestBed:
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills]
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Things to Avoid

- Do NOT use NgModule (use standalone components)
- Do NOT use `*ngIf` / `*ngFor` (use `@if` / `@for`)
- Do NOT add comments unless explaining complex concepts (this project uses comments to document Angular patterns)
- Do NOT mix inline styles with external CSS files (use templateUrl/styleUrl)

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── projects/
│   │   └── skills/
│   ├── app.ts           # Root component
│   ├── app.html         # Root template
│   ├── app.config.ts    # App configuration
│   └── app.routes.ts    # Routing (if needed)
├── styles.css           # Global Tailwind styles
├── main.ts              # Bootstrap entry
└── index.html           # Entry HTML
```

---

## Important Notes

1. **Do NOT modify this project** unless explicitly instructed by the user
2. This is a personal portfolio website built with Angular 21 and Tailwind CSS v4
3. The project uses Angular's new control flow syntax (@if, @for)
4. All components are standalone and use the new import system
