const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.send('Strona główna');
});

app.get('/about', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.send('O nas');
});

app.get('/contact', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.send('Skontaktuj się z nami');
});

app.use((request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.status(404).send('404 - Strona nie istnieje');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
