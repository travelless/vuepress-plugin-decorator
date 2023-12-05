# 介绍

这是一个 vuepress 的插件，为 vuepress 用户提供了一个 frontmatter 的装饰器功能。

## 参考

该插件参考了 eleventy 框架中的[filters](https://www.11ty.dev/docs/filters/)。

# 使用方法：

## 示例

```js
// 在你的config.ts文件中
import { decoratorConfig } from 'vuepress-plugin-decorator'
export default defineUserConfig({
  plugins: [
    decoratorConfig({
      workDir: ['', 'ports/'],
      decorators: {
        toLowerCase: (name) => {
          return name.toLowerCase()
        },
      },
    }),
  ],
})
```

```md
## <!-- 在你的md文件中 -->

name | toLowerCase: FIRSTMEET

---
```

这个文件的 frontmatter 最终会被解析为
name: firstmeet

## 配置：

### config.ts

```js
{
  workDir: ['', 'ports/'], // 你的md文件所在的目录，用数组表示，如果你的md文件在/src目录下，那么就是['']，如果你的md文件在/src/ports目录下，那么就是['ports/']。
  decorators: {
    // 装饰器函数，key是装饰器的名字，value是装饰器函数
    // 装饰器函数的参数val是你在md文件中使用装饰器时的属性值
    // 装饰器函数的返回值newVal会替换掉你在md文件中使用装饰器后的属性值。
    'funName':funtion(val){
      return newVal
    }
  }
}
```

### md 中

```md
---
name | fun: val
---

其中 fun 为你注册的装饰器函数的名字，val 为你传入的参数。
最终会被解析为 name: newVal
```

# 开发者

- QQ：2022742378
- 博客：https://firstmeet.store/

期待更多的需求，欢迎提 issue
