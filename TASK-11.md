# Kubernetes

С помощью minikube разверните у себя локально кластер кубернетеса, а внутри запустите [контейнер](https://hub.docker.com/r/kholstinevich/server).

У деплоя должен быть Label `app: server`, name `server` и 1 реплика. Порт контейнера 3000.

## Подсказки

[Minikube install](https://kubernetes.io/ru/docs/tasks/tools/install-minikube/)

[Minikube](https://github.com/kubernetes/minikube)

[Kubernetes deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

По сути вам необходимо написать deploy.yaml и применить его через `kubectl`.

## Дополнительно

Настройте Minikube чтобы до пода можно было достучаться снаружи (внутри контейнера нода просто отдает hello world).

[Minikube accessing apps](https://minikube.sigs.k8s.io/docs/handbook/accessing/)
