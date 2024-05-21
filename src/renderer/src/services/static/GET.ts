import axios from 'axios'

export const staticBasePath = 'http://localhost:8081/'

// not used
export const GET = async (path: string) => {
  try {
    const file = await axios.get(staticBasePath + path)
    return file
  } catch (e) {
    console.err('error using system')
  }
}

export default GET
