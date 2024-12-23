# CDP

Ваша задача с помощью Chrome DevTools Protocol прочитать содержимое элемента.

Для начала необходимо запустить Google Chrome с опцией `--remote-debugging-port=9222`.

В windows можно прописать команду через свойства, на macos можно запустить с помощью open:

`open '/Applications/Google Chrome.app' --args --remote-debugging-port=9222`

[Stackoverflow](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag)

После запуска убедитесь что все работает, `yarn test:cdp` (не должно быть ошибки `ECONNREFUSED`).

После успешного подключения вам необходимо написать код который достанет с помощью CDP содержимое элемента div с id root.

То есть сделать то же самое что и `querySelector('#root')`.

API CDP обернуто в простую библиотеку [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface).

## Подсказки

Для запуска обязательно используйте дебаггер, API CDP гигантское.

`node --inspect-wait ./test/cdp.js`

[Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/DOM/)

[Chrome DevTools Runtime](https://chromedevtools.github.io/devtools-protocol/tot/Runtime/)

[Chrome Remote Interface](https://github.com/cyrus-and/chrome-remote-interface?tab=readme-ov-file)
