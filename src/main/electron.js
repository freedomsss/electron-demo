import { app, BrowserWindow } from 'electron' // eslint-disable-line

// const edgeModules = require('./edgeModules/index.js');
// import edgeModules from './edgeModules/index.js';
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

// 此处仅兼容了Windows 的 32位 与 64位
const pepflashplayer = (process.arch === 'x64') ? `${__dirname}/flash/pepflashplayer64_32_0_0_293.dll` : `${__dirname}/flash/pepflashplayer64_32_0_0_293.dll`;
// 设定插件
app.commandLine.appendSwitch('ppapi-flash-path', pepflashplayer);
// 设定插件版本（不知道是否真有用，不匹配貌似也能运行）
app.commandLine.appendSwitch('ppapi-flash-version', '23.0.0.207');

// eslint-disable-next-line prefer-destructuring
// const spawn = require('child_process').spawn;
// 启动serialPortDemo.exe程序（C#开发），并传入两个参数：串口号与波特率；
// const childProcess = spawn(require('path').join(__static, 'SayHellExe.exe'));
// console.log('--------------------DemoDll/exe------------');
// 监听serialPortDemo.exe的输出，并将输出打印出来
// childProcess.stdout.on('data', (data) => { console.log(`DemoExe:${data}`); });
// console.log('--------------------DemoDll/exe------------');

// 让下方程序休眠一段时间后执行，可以看到C#的输出；
// setTimeout(() => {
//   childProcess.stdin.write('quit'); // 给C#程序输入'quit'命令
//   childProcess.stdin.end(); // 完成输入后必须调用end方法，否则C#程序无法监听到用户输入
// }, 1000);

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;

function createWindow() {
  // console.log('--------------------DemoDll/exe------------');
  // edgeModules.Fun3();
  // edgeModules.helloWorld('JavaScript', (error, result) => {
  //   if (error) throw error;
  //   console.log(result);
  // });
  // childProcess.stdout.on('data', (data) => { console.log(`DemoExe:${data}`); });
  // console.log('--------------------DemoDll/exe------------');
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
