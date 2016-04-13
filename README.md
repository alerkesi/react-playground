# Песочница для react проекта

## Submodule

В проекте используются submodule для компоненты Autocomplete. Компонента поддерживается в другом репозитории.
Git хранит информацию о submodules в файле .gitmodules (https://git-scm.com/docs/git-submodule):

```
[submodule "src/autocomplete"]
    path = src/autocomplete
    url = https://github.com/alerkesi/autocomplete.git
```

Чтобы склонировать основной репозиторий проделываем стандартную процедуру git clone. Чтобы "залить" все submodules
в проекте выполняем следующие команды:

```
git submodule init
git submodule update

### Использование зависимостей из submodules

Использование autocomplete происходит простым импортом исходного кода:
```typescript
import {Autocomplete} from '../autocomplete/index';