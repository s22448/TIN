const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url;
    switch (url) {
        case '/':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write('Strona główna');
            break;
        case '/about':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write('O nas');
            break;
        case '/contact':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write('Skontaktuj się z nami');
            break;
        default:
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.statusCode = 404;
            response.write('404 - Strona nie istnieje');
            break;
    }

    response.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
