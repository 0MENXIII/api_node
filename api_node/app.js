const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/status') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'OK',
            message: 'API Node.js funcionando'
        }));
    } else {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Bienvenido a la API Node.js'
        }));
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});