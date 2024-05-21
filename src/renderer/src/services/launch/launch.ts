export const launchApp = (id: string) => {
  window.electron.ipcRenderer.invoke('LAUNCH/ID', id)
}
