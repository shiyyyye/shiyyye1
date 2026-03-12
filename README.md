# 个人品牌门户网站

一个现代化、响应式、炫酷高级的个人品牌展示网站。

## ✨ 功能特性

### 核心功能
- ✅ 个人简介展示（姓名、头像、职位介绍）
- ✅ 详细的个人信息页面（教育经历、工作经历、项目经历、个人优势）
- ✅ 作品/项目展示（卡片网格形式，点击跳转详情页）
- ✅ 项目详情页面（完整的项目介绍、技术栈、截图等）
- ✅ 技能标签展示（Devicon图标）
- ✅ 联系渠道（邮箱、社交媒体、联系表单）
- ✅ 响应式导航（移动端汉堡菜单）
- ✅ 平滑滚动
- ✅ SEO优化的页面元信息
- ✅ 页脚信息（版权、更新时间）
- ✅ 简历下载功能

### 炫酷增强功能
- ✅ 暗色/亮色模式切换
- ✅ 回到顶部按钮
- ✅ 丰富的交互动画效果
- ✅ 表单提交功能
- ✅ 渐变文字效果
- ✅ 卡片悬停发光边框
- ✅ 滚动视差动画
- ✅ 时间线展示教育/工作经历

## 🛠️ 技术栈

- 纯 HTML5 + CSS3 + JavaScript（无框架依赖）
- Font Awesome 6.5.1（图标库）
- Devicon（技术栈图标）
- CSS Grid & Flexbox（响应式布局）
- CSS 变量（主题切换）
- Intersection Observer API（滚动动画）
- CSS Mask（渐变边框效果）
- 纯 CSS 渐变与动画

## 📁 项目结构

```
d:\aitraecode3\
├── index.html          # 主页面
├── about-detail.html   # 个人详细信息页面
├── project-detail.html # 项目详情页面
├── styles.css          # 主样式文件
├── styles-detail.css   # 详情页样式文件
├── script.js           # 主页面交互脚本
├── script-detail.js    # 详情页交互脚本
├── vercel.json         # Vercel部署配置
├── package.json        # 项目配置
├── README.md           # 项目说明
├── DEPLOYMENT.md       # 详细部署指南
└── resume.pdf          # 简历文件（需自行添加）
```

## 本地运行

### 方法1：使用 Python（推荐）
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### 方法2：使用 Node.js
```bash
# 安装 serve
npm install -g serve

# 运行
serve . -p 3000
```

### 方法3：使用 VS Code Live Server
安装 Live Server 扩展，右键点击 index.html 选择 "Open with Live Server"

访问 http://localhost:3000 查看网站

## 部署指南

### 方案1：Vercel（推荐，免费）
1. 将代码推送到 GitHub 仓库
2. 访问 vercel.com 并使用 GitHub 登录
3. 导入你的仓库
4. 点击 Deploy，几秒钟后即可上线

### 方案2：Netlify（免费）
1. 将代码推送到 GitHub 仓库
2. 访问 netlify.com 并使用 GitHub 登录
3. 点击 "New site from Git"
4. 选择你的仓库并部署

### 方案3：GitHub Pages（免费）
1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 选择源分支（通常是 main）
4. 点击 Save，网站将在 https://你的用户名.github.io/仓库名/ 上线

## 自定义内容

### 修改个人信息
编辑 `index.html` 文件中的以下内容：
- 姓名：替换 "你的姓名"
- 头像：修改 avatar 的 src 属性
- 职位介绍：修改 hero-title 内容
- 邮箱：修改联系区域的邮箱地址
- 社交媒体链接：更新所有 href 属性

### 添加/修改项目
在 `portfolio-grid` 中添加/修改 `portfolio-card` 元素：
```html
<div class="portfolio-card">
    <div class="card-image">
        <img src="项目图片链接" alt="项目名称">
        <div class="card-overlay">
            <a href="项目链接" target="_blank" class="card-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="GitHub链接" target="_blank" class="card-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="card-content">
        <h3 class="card-title">项目标题</h3>
        <p class="card-description">项目描述</p>
        <div class="card-tags">
            <span class="tag">技术标签1</span>
            <span class="tag">技术标签2</span>
        </div>
    </div>
</div>
```

### 修改技能标签
在 `skills-grid` 中修改 `skill-item`，使用 [Devicon](https://devicon.dev/) 图标。

### 自定义配色
编辑 `styles.css` 中的 CSS 变量：
```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --primary-dark: #4f46e5;      /* 主色调深色 */
    /* ... 其他变量 */
}
```

## 📄 如何上传简历

1. 将你的简历保存为 PDF 格式
2. 命名为 `resume.pdf`
3. 放在项目根目录下（与 index.html 同级）

详细说明请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🚀 快速部署

### Vercel（推荐，免费且最简单）

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的仓库，点击 Deploy

详细步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License - 可自由使用和修改。
