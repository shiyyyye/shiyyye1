# 部署和使用指南

## 📋 目录
1. [如何上传简历](#如何上传简历)
2. [Vercel 部署步骤](#vercel-部署步骤)
3. [其他部署方式](#其他部署方式)
4. [自定义内容](#自定义内容)

---

## 📄 如何上传简历

### 步骤 1：准备你的简历
- 将你的简历保存为 PDF 格式
- 确保简历文件名是：`resume.pdf`

### 步骤 2：放置简历文件
将 `resume.pdf` 文件放在项目根目录下，与 `index.html` 同级：

```
d:\aitraecode3\
├── index.html
├── about-detail.html
├── project-detail.html
├── styles.css
├── styles-detail.css
├── script.js
├── script-detail.js
├── resume.pdf          ← 在这里放置你的简历
└── ...
```

### 步骤 3：验证简历下载
- 运行网站后，点击"下载简历"按钮
- 简历应该会自动开始下载

---

## 🚀 Vercel 部署步骤（推荐）

### 方法 1：通过 GitHub 自动部署（最简单）

#### 前置条件
- 一个 GitHub 账号
- 一个 Vercel 账号（可以用 GitHub 账号登录）

#### 详细步骤

**第 1 步：创建 GitHub 仓库**
1. 访问 https://github.com/new
2. 仓库名称：`portfolio`（或你喜欢的名字）
3. 设置为 Public 或 Private
4. 点击 "Create repository"

**第 2 步：初始化本地 Git 仓库**
打开 PowerShell 或命令行，进入项目目录：

```bash
cd d:\aitraecode3
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/你的用户名/portfolio.git
git push -u origin main
```

**第 3 步：在 Vercel 上部署**
1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 选择你刚创建的 `portfolio` 仓库
5. 点击 "Import"
6. 保持默认设置，点击 "Deploy"
7. 等待约 1-2 分钟，部署完成！

**第 4 步：获取你的网站链接**
- 部署成功后，Vercel 会给你一个类似 `https://portfolio-abc123.vercel.app` 的链接
- 你可以在 Vercel 项目设置中自定义域名

---

### 方法 2：使用 Vercel CLI 部署

#### 安装 Vercel CLI
```bash
npm i -g vercel
```

#### 部署
```bash
cd d:\aitraecode3
vercel
```
- 按提示操作，第一次会要求登录
- 部署完成后会得到预览链接
- 正式部署：`vercel --prod`

---

## 🌐 其他部署方式

### Netlify 部署
1. 将代码推送到 GitHub
2. 访问 https://netlify.com
3. 用 GitHub 登录
4. 点击 "New site from Git"
5. 选择你的仓库，点击部署

### GitHub Pages 部署
1. 将代码推送到 GitHub
2. 进入仓库 Settings → Pages
3. 选择 Source: `Deploy from a branch`
4. 选择分支: `main`
5. 点击 Save
6. 网站地址: `https://你的用户名.github.io/仓库名/`

---

## 🎨 自定义内容

### 修改个人信息
编辑以下文件中的内容：

**index.html**
- 第 18 行：Logo 姓名
- 第 43 行：Hero 区域姓名
- 第 44 行：职位介绍
- 第 193-212 行：关于我内容

**about-detail.html**
- 个人详细信息页面的所有内容

**project-detail.html**
- 项目详情页面的所有内容

### 修改社交媒体链接
在所有 HTML 文件中查找并替换：
- `https://github.com` → 你的 GitHub 链接
- `https://linkedin.com` → 你的 LinkedIn 链接
- `https://twitter.com` → 你的 Twitter 链接
- `https://dribbble.com` → 你的 Dribbble 链接

### 修改邮箱地址
- 在 `index.html` 第 283 行修改邮箱
- 在 `about-detail.html` 中也相应修改

### 修改配色方案
编辑 `styles.css` 开头的 CSS 变量：
```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --primary-dark: #4f46e5;      /* 主色调深色 */
    --secondary-color: #8b5cf6;    /* 辅助色 */
    /* ... */
}
```

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看 Vercel 文档：https://vercel.com/docs
2. 查看项目 README.md
3. 检查浏览器控制台的错误信息

---

**祝你部署顺利！🎉**
