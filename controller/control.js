const { ipcRenderer } = require('electron');

document.getElementById('ligar').addEventListener('click', (e) => {
    e.preventDefault();

    ipcRenderer.send('send-data', 'ligar');
});

document.getElementById('desligar').addEventListener('click', (e) => {
    e.preventDefault();

    ipcRenderer.send('send-data', 'desligar');
});
