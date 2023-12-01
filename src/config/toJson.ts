import { writeFile, readFileSync } from 'fs'
export const toJson = () => {
  return {
    name: 'vite:toJson',
    config: async () => {
      await toJSon().then(res => {
        return res
      })
    },
    transform: async (src: string, id: string) => {
      if (id.includes('pages-json-js') || id.includes('manifest-json-js')) {
        await toJSon()
      } else {
        return {
          code: src,
          map: null // 如果可行将提供 source map
        }
      }
    }
  }
}
const toJSon = async () => {
  return new Promise((resolve, reject) => {
    const pages = readFileSync('./src/config/pages.js', 'utf-8')
    console.log(pages)
    // 执行 pages
  })
}
