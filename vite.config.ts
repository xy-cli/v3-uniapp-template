import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { execSync } from 'child_process'
// https://vitejs.dev/config/
export default (e: {
  mode: string,
  command: string
}) => {
  let versionCode = '0.0.1'
  let publicPath = ''
  if (e.mode !== 'development') {
    try {
      const commit = execSync('git show -s --format=%d').toString().trim()
      versionCode = String(commit.match(/\d+(?:\.\d+)*\b/))
    } catch (e) {
      console.log('Error: 版本获取失败，使用默认分支0.0.1')
    }
    publicPath = loadEnv(e.mode, process.cwd(), '').VITE_PUBLIC_PATH + versionCode + '/build/h5/'
  }
  console.log('\x1B[32m√ publicPath: ' + publicPath, '\x1B[37m')
  return defineConfig({
    base: publicPath,
    esbuild:{
      pure: ['console.log'],
      drop: ['debugger'],
    },
    plugins: [
      uni()
    ]
  })
}
