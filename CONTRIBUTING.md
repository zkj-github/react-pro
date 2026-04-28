# Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for changelog generation.

## Format

```
<type>[optional scope]: <description>

[optional body]
```

## Types

- `feat`: New feature
- `fix`: Bug fix
- `perf`: Performance improvement
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `style`: Code style changes

## Examples

```bash
git commit -m "feat: add button component"
git commit -m "fix: resolve date formatting issue"
git commit -m "docs: update README"
```

## Release

```bash
# Patch release (bug fixes)
pnpm release:patch

# Minor release (new features)
pnpm release:minor

# Major release (breaking changes)
pnpm release:major
```
