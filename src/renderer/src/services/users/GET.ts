import { User } from '@prisma/client'
import { delay } from '@renderer/utils/delay'

export const GET = async () => {
  try {
    const users = (await window.electron.ipcRenderer.invoke('USER:GET')) as User[]
    // imitate fake api delay
    await delay(0.5 + Math.random() * 500)
    return users
  } catch (e) {
    // not managed yet
    console.error(e)
    return {
      error: "so bad, you can't see my users"
    }
  }
}

export default GET
