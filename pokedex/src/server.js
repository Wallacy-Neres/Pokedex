const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const serverStatic = require('serve-static')
const app = express();

app.use(serverStatic(path.resolve(__dirname)))
app.use('/', (request, response) => {
  response.send(path.resolve(__dirname, './src/index.html'))
});

app.listen(port, () => console.log('API rodando'));

