# Reverse proxy docker container

Необходимо добавить контейнеру из 10 лекции nginx в качестве reverse proxy.

Не открывайте порт у ноды, она не должна быть доступна снаружи.

Проксируйте запрос в ноду с помощью nginx, используйте 80 порт, ответ с json должен открываться на http://localhost.

Для этого создайте сеть и укажите ее при запуске контейнеров (--network).

Контейнеру с нодой дайте имя `server` и проксируйте (proxy_pass) запросы из nginx на `http://server:8080`.

Для тестирования используйте `yarn test:reverse`

## Подсказки

Используйте образ [nginx](https://hub.docker.com/_/nginx).

Путь конфига внутри образа - `/etc/nginx/conf.d/default.conf`

Для сборки Dockerfile с другим именем флаг `-f Dockerfile.proxy`
