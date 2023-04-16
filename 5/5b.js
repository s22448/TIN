const http = require('http');
const { getHomepageString, getAboutString, getContactString } = require('./module');

const server = http.createServer((request, response) => {
    const url = request.url;
    switch (url) {
        case '/':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write(getHomepageString());
            break;
        case '/about':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write(getAboutString());
            break;
        case '/contact':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.write(getContactString());
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

module.exports = {
    getHomepageString() {
        return 'Strona główna';
    },

    getAboutString() {
        return 'O nas';
    },

    getContactString() {
        return 'Skontaktuj się z nami';
    }
};
