require('dotenv').config();
const PORT = process.env.PORT || 8000;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use('/', express.static('client'));
app.use('/admin', express.static('admin'));

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
