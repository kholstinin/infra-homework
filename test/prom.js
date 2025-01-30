(async () => {
  await fetch('http://localhost:8080');
  let metrics;

  try {
    const response = await fetch('http://localhost:8000/metrics');
    metrics = await response.json();
  } catch (err) {
    throw new Error(`Не удалось достать json метрики: ${err}`);
  }

  const apiRequestMetrics = metrics.find((item) => item.name === 'api_request');
  if (apiRequestMetrics == null) {
    throw new Error('Метрика api_request не найдена');
  }

  const apiRequestBuckets = apiRequestMetrics.values.map((item) => item.labels.le).filter(Number);
  const expectedBuckets = [0.5, 1, 1.5, 2];
  if (!expectedBuckets.every((item) => apiRequestBuckets.includes(item))) {
    throw new Error(`Представлены не все бакеты, ожидается: ${expectedBuckets}, а найдены ${apiRequestBuckets}`);
  }
})();
