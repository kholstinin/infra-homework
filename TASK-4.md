# Реализовать кастомное правило для eslint

У webpack есть возможность подменять константы во время сборки на реальное значение, обычно это делается с помощью [definePlugin](https://webpack.js.org/plugins/define-plugin/).

```js
new webpack.DefinePlugin({
  PROJECT: JSON.stringify(process.env.PROJECT)
});
```

```js
// src/index.js
if (PROJECT === 'target') {
  // some action
}
```

Чтобы не возникало путаницы с глобальными костантами которые выставляются в рантайме договоримся что обращения к рантайм константам должны быть явно через `globalThis.`

```js
if (globalThis.IS_STAGE) {
  // some action
}
```

Ваша задача написать плагин, который берет список констант из `build/const/webpack.js` и форсит использование `globalThis` для констант не из списка. Константой считаем все переменные написанные в верхнем регистре (в названии также допустим `_`).

Список констант необходимо пробросить внутрь плагина аргументом, а не импортировать напрямую в самом правиле.

Плагин следует писать в `build/eslint-plugin-infra`.

Для тестирования используйте команду `yarn test:eslint`.

## Подсказки

Для дебага eslint

`node --inspect-wait node_modules/eslint/bin/eslint.js`

[AST-explorer](https://astexplorer.net/) (вам нужен parser - espree)

[Eslint plugin tutorial](https://eslint.org/docs/latest/extend/plugins)

[Eslint rule tutorial](https://eslint.org/docs/latest/extend/custom-rules)

[Source Code API](https://eslint.org/docs/latest/extend/custom-rules#accessing-the-source-code)
