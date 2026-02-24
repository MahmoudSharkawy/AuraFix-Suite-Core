const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    
    // --- macOS Visual Styling ---
    titleBarStyle: 'hiddenInset', // Hides the title bar but keeps the Mac "traffic light" buttons
    vibrancy: 'under-window',     // Adds the beautiful Mac "frosted glass" effect (macOS only)
    visualEffectState: 'active',
    backgroundColor: '#00000000', // Transparent background to allow vibrancy to show
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Load a placeholder or your index.html
  // For now, it will look for index.html in the same folder
  mainWindow.loadFile('app/index.html');

  // Remove the default menu bar (Windows/Linux style)
  mainWindow.setMenuBarVisibility(false);
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

