const { ipcMain } = require('electron');
const api = require('../api/api');

ipcMain.on('send-data', async (event, data) => {
    if (data === 'ligar') {
        const response = await api.post('/sharing_day', { data: data });
        console.log(response.status);
    } else if (data === 'desligar') {
        const response = await api.post('/sharing_day', { data: data });
        console.log(response.status);
    }
});
