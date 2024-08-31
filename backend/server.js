const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const ciCdService = require('./services/ciCdService');
const serverMonitoringService = require('./services/serverMonitoringService');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Rutas de ejemplo
app.use('/api/metrics', require('./routes/metrics'));

io.on('connection', (socket) => {
    console.log('New client connected');

    // Emitir datos de CI/CD y monitoreo de servidores en tiempo real
    setInterval(() => {
        socket.emit('ciCdStatus', ciCdService.getStatus());
        socket.emit('serverMetrics', serverMonitoringService.getMetrics());
    }, 5000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
