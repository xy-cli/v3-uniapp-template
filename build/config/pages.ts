import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pages from '@/router'
import tabBar from './tabbar'
const __dirname: string = path.dirname(fileURLToPath(import.meta.url))

const data = {
  easycom: {
    autoscan: true, // 是否自动扫描组件
    custom: {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue",
    },
    // '^s-(.*)': '@netm/schbrain-view/components/s-$1/s-$1.vue'
  },
  pages,
  subPackages: [], // 分包
  globalStyle: {
    maxWidth: 500,
    rpxCalcMaxDeviceWidth: 500,
    rpxCalcIncludeWidth: 750, // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
    // #ifndef APP-PLUS
    navigationStyle: 'custom',
    // #endif
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  tabBar: {
    color: '#808b9a',
    selectedColor: '#4782e0',
    borderStyle: 'white',
    fontSize: '12px',
    backgroundColor: '#f9fafc',
    list: tabBar
  }
}
// eslint-disable-next-line node/no-path-concat
fs.writeFile(`${__dirname}/../../src/pages.json`, JSON.stringify(data), (e: any) =>
  e ? console.error(e) : console.log('\x1B[32m√ pages.json 配置文件更新成功', '\x1B[37m'))

export {}
