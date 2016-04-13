# Песочница для react проекта

## Submodule

В проекте используются submodule для компоненты Autocomplete. Компонента поддерживается в другом репозитории.
Git хранит информацию о submodules в файле .gitmodules (https://git-scm.com/docs/git-submodule):

```
[submodule "src/autocomplete"]
    path = src/autocomplete
    url = https://github.com/alerkesi/autocomplete.git
```

Использование autocomplete происходит простым импортом исходного кода:
```typescript
import {Autocomplete} from '../autocomplete/index';