const express = require('express');
const redis = require('redis');

// 레디스 클라이언트 생성
const client = redis.createClient({
  host: "redis-server", // docker 환경이 아닐때 "https://redis-server.co," docker 환경이 일때 "redis-server" docker-compose.yml 파일에 명시한 컨테이너 이름을 명시해야됨
  port: 6379 // redis의 기본포트
});

const app = express();

client.set('number', 0);

app.get('/', (req, res) => {
  client.get("number", (err, number) => {
    client.set("number", parseInt(number + 1))
    res.send(`숫자가 1씩 올라갑니다. 숫자: ${number + 1}`)
  });
});

app.listen(8080, () => {
  console.log('연결중')
});