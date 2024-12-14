# Написать кастомную проверку и вызывать ее в git hook на pre-commit

Необходимо написать самописную проверку на node.js для валидации структуры файловой системы.

В src/components должны лежать компоненты, где у каждого компонента есть index.js с реэкспортом и {component}.js.

В src/components уже лежат компоненты и известны ошибки (в list нет index.js, в footer нет footer.js).

Напишите в build/lint-fs.js такую проверку, формат вывода:

`Structure of component ${component} is broken! Missing ${fileName}`

Также необходимо добавить вызов этой проверки в pre-commit хук.

Для проверки используйте команду `yarn test:hook`.

## Подсказки

Для vscode включен показ .git папки, для webstorm воспользуйтесь [инструкцией](https://stackoverflow.com/questions/35784352/intellij-doesnt-show-git-directory).

Для валидации вам хватит модулей fs и path.

