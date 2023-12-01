export function filterFuncConfig(config) {
  const { workDir, filterFuncs } = config
  // 请求地址
  return function filterFunc(app) {
    return {
      name: 'filterFunc',
      extendsPage: (page) => {
        if (isWorkDir(page, workDir, app)) {
          dealWithFrontmatter(page.frontmatter, filterFuncs)
        }
      },
    }
  }
}

function isWorkDir(page, workDir, app) {
  for (let i of workDir) {
    if (page.filePath?.startsWith(app.dir.source(i))) {
      return true
    }
  }
  return false
}

function dealWithFrontmatter(frontmatter, filterFuncs) {
  for (let item in frontmatter) {
    if (
      (typeof frontmatter[item] === 'object') |
      Array.isArray(frontmatter[item])
    ) {
      dealWithFrontmatter(frontmatter[item], filterFuncs)
    } else {
      if (item.includes(' | ')) {
        let originName = item.split(' | ')[0]
        let filterFuncName = item.split(' | ')[1]
        if (!filterFuncs[filterFuncName]) {
          throw new Error(`filterFuncs中没有${filterFuncName}这个函数`)
        }
        frontmatter[originName] = filterFuncs[filterFuncName](frontmatter[item])
        delete frontmatter[item]
      }
    }
  }
}
