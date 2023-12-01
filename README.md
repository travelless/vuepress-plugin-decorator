# 介绍

这是一个 vuepress 的插件，为 vuepress 用户提供了一个类似 eleventy 中 filter 函数的过滤器功能。

使用方法：

```js
// 在你的config.ts文件中
import { filterFuncConfig } from 'vuepress-plugin-filter-func'
export default defineUserConfig({
  plugins: [
    filterFuncConfig({
      workDir: ['', 'ports/'],
      filterFuncs: {
        'img-url': (url) => {
          return `https://127.0.0.1${url}`
        },
      },
    }),
  ],
})
```

```md
## <!-- 在你的md文件中 -->

url | img-url: /img/1.png

---
```

这个文件的 frontmatter 最终会被解析为
url: 'https://127.0.0.1/img/1.png'
