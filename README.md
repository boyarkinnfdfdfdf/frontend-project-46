### Hexlet tests and linter status:
[![Actions Status](https://github.com/boyarkinnfdfdfdf/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/boyarkinnfdfdfdf/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac8d001e50065836838c/maintainability)](https://codeclimate.com/github/boyarkinnfdfdfdf/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ac8d001e50065836838c/test_coverage)](https://codeclimate.com/github/boyarkinnfdfdfdf/frontend-project-46/test_coverage)


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


#### Two YML files with nested objects compare (stylish formatter)


#### Plain formatter


#### JSON formatter
