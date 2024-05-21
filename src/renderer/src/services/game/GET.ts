import { Game } from '@prisma/client'
import { delay } from '@renderer/utils/delay'

export const GET = async () => {
  try {
    const games = (await window.electron.ipcRenderer.invoke('GAME:GET')) as Game[]
    // imitate fake api delay
    await delay(0.5 + Math.random() * 500)
    return games
  } catch (e) {
    // not managed yet
    console.error(e)
    return {
      error: "so bad, you can't see my games"
    }
  }
}

export default GET
