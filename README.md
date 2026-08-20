# BoxCat 法律中心

托管 BoxCat 旗下各项目隐私政策与法律文件的静态站点,基于 [VitePress](https://vitepress.dev) 构建,可部署于 Vercel / Netlify 等静态托管平台。

## 本地开发

要求 Node.js ≥ 20(与 `package.json` 的 `engines` 及 `netlify.toml` 中的 `NODE_VERSION` 保持一致)。

```sh
npm install
npm run docs:dev     # 本地开发,默认 http://localhost:5173
npm run docs:build   # 生产构建,输出到 docs/.vitepress/dist
npm run docs:preview # 本地预览生产构建
```

## 目录结构

```
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.ts        # 站点配置(导航、侧边栏、语言)
│  │  └─ theme/           # 自定义主题样式
│  │     ├─ index.ts
│  │     └─ custom.css
│  ├─ public/
│  │  └─ logo.svg         # 站点 logo
│  ├─ index.md            # 首页
│  └─ projects/
│     ├─ index.md         # 项目总览
│     └─ <project-name>/  # 每个项目一个文件夹
│        ├─ index.md      # 项目法律文件索引
│        ├─ privacy.md    # 隐私政策
│        └─ privacy-en.md # 隐私政策(英文,可选)
├─ vercel.json            # Vercel 部署配置
├─ netlify.toml           # Netlify 部署配置
└─ package.json
```

构建产物 `docs/.vitepress/dist/` 与 `docs/.vitepress/cache/` 已加入 `.gitignore`,不提交。

`docs/projects/` 下每个项目一个文件夹,参考现有 `nekoreki/` 的结构。支持多语言时,中文文件不带后缀(`privacy.md`),英文文件带 `-en` 后缀(`privacy-en.md`)。

## 新增项目

1. 复制 `docs/projects/nekoreki/` 为 `docs/projects/<project-name>/`;
2. 替换项目名称、生效日期、联系方式等占位内容;如提供英文版,复制 `privacy.md` 为 `privacy-en.md` 并翻译;
3. 在 `docs/projects/index.md` 的表格中追加一行;
4. 在 `docs/.vitepress/config.ts` 的 `projectsSidebar` 中追加一组侧边栏条目,并把导航中的示例链接改为真实项目。

## 部署

静态站点由 `npm run docs:build` 构建,输出目录 `docs/.vitepress/dist`,无需服务端运行时。

### Vercel

导入仓库后使用默认的 VitePress 框架预设即可;`vercel.json` 已显式声明框架、构建命令与输出目录。

### Netlify

导入仓库后使用 `netlify.toml` 中的构建配置(命令 `npm run docs:build`,发布目录 `docs/.vitepress/dist`,Node 20)。

注意:平台侧的 HTML 压缩选项(如 Auto Minify)请保持关闭,避免破坏 Vue 需要的注释导致水合错误。
