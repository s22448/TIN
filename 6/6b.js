const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', (request, response) => {
    response.send('hello world');
});

app.get('/form', (request, response) => {
    const formHtml = `
    <form method="POST" action="/formdata">
      <label for="name">Nazwa:</label>
      <input type="text" name="name" id="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email"><br><br>
      <label for="message">Wiadomość:</label>
      <textarea name="message" id="message"></textarea><br><br>
      <input type="submit" value="Submit">
    </form>
  `;
    response.send(formHtml);
});

app.post('/formdata', (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const message = request.body.message;

    const formDataHtml = `
    <p>Nazwa: ${name}</p>
    <p>Email: ${email}</p>
    <p>Wiadomość: ${message}</p>
  `;
    response.send(formDataHtml);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
