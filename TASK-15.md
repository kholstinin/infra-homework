# Prometheus

Добавьте к серверу `server.js` сборку метрик для `prometheus`.

Он должен собирать дефолтные метрики ноды, а так же Histogram запроса в API gitlab.

Сервер метрик должен отвечать на http://localhost:8000/metrics и отдавать метрики в JSON.

Для формирования метрик используйте библиотеку prom-client.

У Histogram должно быть название `api_request` и бакеты `[0.5, 1, 1.5, 2]`.

## Подсказки

Можете запускать server.js так же в докер контейнере или доработать чтобы работал без контейнера.

[prom-client](https://github.com/siimon/prom-client).

Не забудьте зарегистрировать Histogram в Registry.

У prom-client есть отдельный метод который отдает метрики в JSON.
