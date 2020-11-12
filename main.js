// https://github.com/electron/electron-quick-start/blob/master/main.js

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow(){
    //create browser windw
    const mainWindow = new BrowserWindow({
        width:800, 
        height:600,
        webPreferences: {nodeIntegration:true
        }}) // put logo sometime

    // load index.html
    mainWindow.loadFile('index.html')

    // open devtools
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.whenReady().then( () => {
    createWindow()
})

app.on('window-all-closed', function () {
    app.quit()
})

