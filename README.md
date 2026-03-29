# 🚀 MX Mundial 2026 — 完整部署指南

> 你在 VSCode 里写指令，我生成内容，你 push 一下，网站自动上线。

---

## 第一步：安装 Node.js（只需做一次）

打开 PowerShell，检查是否已安装：
```powershell
node -v
```

如果没有，去下载安装：https://nodejs.org（选 LTS 版本，一键安装）

---

## 第二步：安装项目依赖（只需做一次）

在 VSCode 终端里，进入项目目录：
```powershell
cd "c:\金乌-vscode\WEB3球\sites\mx-mundial-2026"
npm install
```

等待安装完成（约 1-2 分钟）。

---

## 第三步：配置环境变量（只需做一次）

复制 `.env.example` 文件，创建 `.env.local`：
```powershell
copy .env.example .env.local
```

然后用 VSCode 打开 `.env.local`，填入你的真实信息：
```
NEXT_PUBLIC_SITE_URL=https://你的域名.com
NEXT_PUBLIC_TELEGRAM_CHANNEL=https://t.me/你的频道名
NEXT_PUBLIC_TELEGRAM_BOT=https://t.me/你的机器人
```

---

## 第四步：本地测试（日常开发用）

```powershell
npm run dev
```

打开浏览器访问 http://localhost:3000 — 看到网站就成功了！

---

## 第五步：上传到 GitHub（只需做一次建仓库）

### 5.1 在 GitHub 新建仓库
1. 打开 https://github.com
2. 点右上角 `+` → `New repository`
3. 名字填 `mx-mundial-2026`
4. 选 `Private`（私有，安全）
5. **不要** 勾选 Add README
6. 点 `Create repository`

### 5.2 本地连接 GitHub
```powershell
cd "c:\金乌-vscode\WEB3球\sites\mx-mundial-2026"
git init
git add .
git commit -m "first commit: MX mundial 2026 site"
git remote add origin https://github.com/你的用户名/mx-mundial-2026.git
git branch -M main
git push -u origin main
```

---

## 第六步：Vercel 部署（只需做一次）

1. 打开 https://vercel.com，用 GitHub 账号登录
2. 点 `Add New Project`
3. 找到 `mx-mundial-2026` 仓库，点 `Import`
4. Framework 会自动识别为 `Next.js`
5. 点击 `Environment Variables`，添加：
   - `NEXT_PUBLIC_SITE_URL` = `https://你的域名.com`（或先填 Vercel 给的临时域名）
   - `NEXT_PUBLIC_TELEGRAM_CHANNEL` = `https://t.me/你的频道`
   - `NEXT_PUBLIC_TELEGRAM_BOT` = `https://t.me/你的机器人`
6. 点 `Deploy`

等 2-3 分钟，Vercel 给你一个免费域名：`mx-mundial-2026.vercel.app`
**网站上线！**

---

## 第七步：绑定自定义域名

### 7.1 购买域名
推荐在以下平台购买（西语域名建议）：
- Namecheap.com（便宜，支持支付宝）
- Cloudflare Registrar（最便宜，无溢价）

建议域名：
- `pronosticos-mundial-2026.com`
- `predicciones-copa-2026.com`
- `copa-mundial-mx.com`

### 7.2 在 Vercel 绑定域名
1. 进入你的 Vercel 项目 → `Settings` → `Domains`
2. 输入你购买的域名，点 `Add`
3. Vercel 会给你两条 DNS 记录（类似：`A 76.76.21.21` 和 `CNAME`）

### 7.3 在域名注册商设置 DNS
去你购买域名的平台（Namecheap等），找到 DNS 设置，添加 Vercel 给你的记录。

等待 **10分钟 ~ 24小时**，域名生效。

---

## 日常工作流程（之后每次更新内容）

```
你告诉我：「帮我写一篇关于德国队的预测文章」
    ↓
我在 VSCode 创建 content/predicciones/alemania.md
    ↓
你执行（复制粘贴这3行）：

git add .
git commit -m "新增德国队预测"
git push

    ↓
Vercel 自动构建（2-3分钟）
    ↓
网站自动更新，Google 收录新页面
```

**一句话：你只需要 `git add . ; git commit -m "描述" ; git push`，其余全自动。**

---

## 添加新内容的方法

每次添加新球队预测，只需创建一个 `.md` 文件：

**文件位置**：`content/predicciones/[球队名].md`

**文件格式**（复制这个模板）：
```markdown
---
title: "德国 Copa Mundial 2026: Predicciones y Análisis"
description: "Análisis completo de Alemania para el Mundial 2026."
team: "Alemania"
flag: "🇩🇪"
group: "G"
date: "2026-03-30"
image: "/images/og-alemania.jpg"
---

## 正文内容从这里开始（用西班牙语）...
```

然后 push，网站自动更新，sitemap 自动包含新页面，Google 自动发现新内容。

---

## SEO 框架说明（自动处理的部分）

| SEO 元素 | 状态 | 说明 |
|---|---|---|
| Title & Meta Description | ✅ 自动 | 从 .md frontmatter 读取 |
| Sitemap.xml | ✅ 自动 | 每次构建自动生成 |
| Robots.txt | ✅ 自动 | 允许所有搜索引擎 |
| Open Graph (社交分享图) | ✅ 自动 | 从 frontmatter 读取 |
| 结构化数据 Schema | ✅ 自动 | Article Schema 每页自动注入 |
| Canonical URL | ✅ 自动 | 防止重复内容 |
| Breadcrumb 面包屑 | ✅ 自动 | 每个内页自动显示 |
| hreflang 多语言 | ⏳ 待扩展 | 需要时添加 |

---

## 提交 Google Search Console（上线后做）

1. 打开 https://search.google.com/search-console
2. 添加你的域名或 URL 前缀
3. 下载 HTML 验证文件，放到 `public/` 目录，push
4. 提交 sitemap：`https://你的域名.com/sitemap.xml`
5. 等待 Google 收录（通常 1-7 天）

---

## 项目文件结构说明

```
mx-mundial-2026/
├── app/                    # Next.js App Router 核心
│   ├── layout.tsx          # 全站布局（导航+底部）
│   ├── page.tsx            # 首页
│   ├── sitemap.ts          # 自动 sitemap
│   ├── robots.ts           # robots.txt
│   └── predicciones/
│       ├── page.tsx        # 预测列表页
│       └── [slug]/         # 动态路由
│           └── page.tsx    # 每支球队预测页
├── components/
│   ├── Navigation.tsx      # 顶部导航
│   ├── TelegramCTA.tsx     # Telegram 引流组件
│   └── Footer.tsx          # 底部
├── lib/
│   └── content.ts          # 读取 .md 文件的工具函数
├── content/
│   └── predicciones/       # ← 在这里添加新内容！
│       ├── mexico.md
│       ├── brasil.md
│       ├── argentina.md
│       ├── espana.md
│       ├── francia.md
│       └── estados-unidos.md
└── public/
    └── images/             # 放图片到这里（OG图、球队图片）
```
