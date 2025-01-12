const argv = process.argv;
const workflowURL = argv[2];

if (workflowURL == null) {
    console.error('Не указан адрес пайплайна!');
    process.exit(1);
}

try {
    new URL(workflowURL);
} catch (err) {
    console.error('Невалидный URL пайплайна');
    process.exit(1);
}

fetch(
    'https://kholstinin.com/infra/gitlab/',
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: workflowURL }) }
).then((response) => {
    if (response.status === 200) {
        console.log('Пайплайн верен!');

    } else {
        return response.text();
    }
}).then((text) => {
    if (text) {
        console.log('Error from server: ', text);
    }
}).catch((err) => {
    console.log('Что-то пошло не так: ', err);
})
