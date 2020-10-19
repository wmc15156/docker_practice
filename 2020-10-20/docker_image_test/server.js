const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ggggg');
})

app.listen(8000, () => {
  console.log('실행중');
});