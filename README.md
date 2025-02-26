### Hexlet tests and linter status:
[![Actions Status](https://github.com/boyarkinnfdfdfdf/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/boyarkinnfdfdfdf/frontend-project-46/actions)


# Проект "Вычислитель отличий"
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

### Install
Clone this repo: 
```
git clone https://github.com/boyarkinnfdfdfdf/frontend-project-46.git
```

Go to the project folder: 
```
cd frontend-project-46
```

Install package: 
```
make install
npm link
```

### Usage
To read help:
```
gendiff -h
```

To see version:
```
gendiff -V
```

To compare two files:
```
gendiff <path to file1> <path to file2>
```

To select the output format:
```
gendiff --format plain <path to file1> <path to file2>
```

### Examples
#### Two JSON files with nested objects compare (stylish formatter)
[![asciicast](https://asciinema.org/a/pc3BDqhr29nj5MeEKzyaGc9VO.svg)](https://asciinema.org/a/pc3BDqhr29nj5MeEKzyaGc9VO)

#### Two YML files with nested objects compare (stylish formatter)
[![asciicast](https://asciinema.org/a/KLcX4eh5E55uzYgYfbFn5AcCm.svg)](https://asciinema.org/a/KLcX4eh5E55uzYgYfbFn5AcCm)

#### Plain formatter
[![asciicast](https://asciinema.org/a/Q93Q2OpJN21sB2Sh2zk5AoGty.svg)](https://asciinema.org/a/Q93Q2OpJN21sB2Sh2zk5AoGty)

#### JSON formatter
[![asciicast](https://asciinema.org/a/qGGtupJFpdV3JNmKXKx3Op3oh.svg)](https://asciinema.org/a/qGGtupJFpdV3JNmKXKx3Op3oh)