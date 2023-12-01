import Pages from '../router'
import TabBar from './tabBar'
import { writeFile } from 'fs'
const data = {
  easycom: {
    custom: {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue",
      '^s-(.*)': '@/components/s-$1/index.vue',
    }
  },
  pages: Pages,
  globalStyle: {
    maxWidth: 500,
    rpxCalcMaxDeviceWidth: 500,
    rpxCalcIncludeWidth: 750, // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
    // #ifndef APP-PLUS
    navigationStyle: 'custom',
    // #endif
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#FFFFFF',
    backgroundColor: '#FFFFFF'
  },
  tabBar: {
    color: '#96A2B7',
    selectedColor: '#0090F5',
    borderStyle: 'white',
    fontSize: '10px',
    backgroundColor: '#f9fafc',
    iconWidth: '26px',
    list: TabBar
  }
}

writeFile(`${__dirname}/../pages.json`, JSON.stringify(data), (e) =>
  e ? console.error(e) : console.log('\x1B[32m√ pages.json 配置文件更新成功', '\x1B[37m')
)
