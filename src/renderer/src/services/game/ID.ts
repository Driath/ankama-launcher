import { Game } from '@prisma/client'
import { delay } from '@renderer/utils/delay'

export const ID = async (id: string) => {
  try {
    const game = (await window.electron.ipcRenderer.invoke('GAME:GET/ID', id)) as Game
    // imitate fake api delay
    await delay(500 + Math.random() * 500)
    return game
  } catch (e) {
    // not managed yet
    console.error(e)
    return {
      error: "so bad, you can't see my game"
    }
  }
}

export default ID
