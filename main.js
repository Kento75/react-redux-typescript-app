const { app, BrowserWindow } = require('electron')

let win

function createWindow() {
  // ブラウザウィンドウ生成
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')

  if (process.argv.find((arg) => arg === '--debug')) {
    win.webContents.openDevTools()
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

// 全てのウィンドウオブジェクトが閉じたときのイベントハンドラ
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});