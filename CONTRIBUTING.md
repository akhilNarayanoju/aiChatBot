# Contributing to AI Chatbot

First off, thank you for considering contributing to AI Chatbot! It's people like you that make this project better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots)
- **Describe the behavior you observed** and what you expected
- **Include details about your environment** (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any similar features** in other projects (if applicable)

### Pull Requests

1. Fork the repository and create your branch from `master`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code follows the existing code style
5. Write a clear commit message

## Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/your-username/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment:**
   - Copy `.env.example` to `src/environments/environment.ts`
   - Add your Gemini API key

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## Coding Standards

### TypeScript/Angular

- **Use TypeScript strict mode** - Already configured in tsconfig.json
- **Follow Angular style guide** - Use the official Angular style guide
- **Use standalone components** - This project uses Angular standalone components
- **Type everything** - Avoid using `any` type
- **Use meaningful variable names** - Be descriptive

### Code Formatting

- **Prettier** is used for code formatting
- Run `npm run format` before committing
- Configure your editor to format on save

### File Structure

```
src/app/
├── components/       # Reusable UI components
├── services/         # Business logic and API calls
├── models/           # TypeScript interfaces and types
├── interceptors/     # HTTP interceptors
└── guards/           # Route guards (if any)
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Code style changes (formatting, missing semi-colons, etc)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Examples

```
feat(chat): add voice input support

Add microphone button to chat interface that enables
voice-to-text input using Web Speech API.

Closes #123
```

```
fix(gemini): handle rate limit errors gracefully

Implement retry logic with exponential backoff for
rate limit errors from Gemini API.

Fixes #456
```

## Pull Request Process

1. **Update documentation** - Update README.md if needed
2. **Add tests** - Ensure your changes are tested
3. **Run the test suite** - `npm test`
4. **Format your code** - `npm run format`
5. **Lint your code** - `npm run lint`
6. **Update CHANGELOG.md** - Add your changes under "Unreleased"
7. **Create the Pull Request** with a clear title and description

### PR Title Format

```
<type>: <short description>
```

Example: `feat: add dark mode toggle`

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing unit tests pass locally
```

## Testing

- Write unit tests for new features
- Maintain or improve code coverage
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on different screen sizes

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## Attribution

Thank you for your contributions! All contributors will be recognized in the project.

---

**Happy Contributing!** 🎉
