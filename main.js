const console = require('console');
const { app, BrowserWindow } = require('electron');
require('./core/background');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    // win.setMenuBarVisibility(false)
    win.loadFile('./public/index.html');
}

app.whenReady().then(() => {
    createWindow()
    console.log('the electron application is ready!');

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})