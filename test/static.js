import assert from 'node:assert';
import mime from 'mime';

const expected = JSON.parse(Buffer.from('ewogICJkYXRhLmpzb24iOiB7CiAgICAiY2FjaGUtY29udHJvbCI6ICJtYXgtYWdlPTM2MDAiCiAgfSwKICAiaW5kZXguaHRtbCI6IHsKICAgICJjYWNoZS1jb250cm9sIjogIm5vLWNhY2hlIiwKICAgICJwcmFnbWEiOiAibm8tY2FjaGUiLAogICAgInZhcnkiOiAidXNlci1hZ2VudCIKICB9LAogICJtYWluLmpzIjogewogICAgImNhY2hlLWNvbnRyb2wiOiAibWF4LWFnZT0zNjAwIgogIH0sCiAgInN0eWxlcy5jc3MiOiB7CiAgICAiY2FjaGUtY29udHJvbCI6ICJtYXgtYWdlPTM2MDAiCiAgfQp9Cg==', 'base64').toString('utf-8'));

(async () => {
  const fileNames = Object.keys(expected);

  for (const fileName of fileNames) {
    const fileResponse = await fetch(`http://localhost:3001/${fileName}`);
    const headers = fileResponse.headers;

    const expectedContentType = mime.getType(fileName);
    const contentTypeHeader = headers.get('content-type');
    assert.ok(contentTypeHeader?.includes(expectedContentType));

    const contentEncodingHeader = headers.get('content-encoding');
    const expectedContentEncoding = 'br';
    assert.equal(contentEncodingHeader, expectedContentEncoding);

    const expectedHeaders = expected[fileName];
    for (const headerName in expectedHeaders) {
      const expectedValue = expectedHeaders[headerName];
      assert.equal(headers.get(headerName)?.toLowerCase(), expectedValue?.toLowerCase())
    }
    
    try {
      await fileResponse.text();
    } catch (err) {
      throw new Error(`Ошибка при декомпрессии файла ${fileName} из brotli!`);
    }
  }
})();
