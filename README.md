# Movie Database

這是一個使用 React 和 TypeScript 建立的電影資料庫網站。

## 技術棧

- React 18
- TypeScript
- React Router v6
- Styled Components
- Axios
- React Infinite Scroll Component
- React Error Boundary
- React Icons

## 開發工具

- ESLint
- Prettier
- Husky
- Lint Staged
- Jest (測試框架)
- React Testing Library

## 功能特點

- 無限滾動載入
- 錯誤邊界處理
- 響應式設計
- TypeScript 類型安全
- 自動化程式碼格式化
- Git Hooks 前置提交檢查

## 開始使用

### 系統要求

- Node.js 20 或更高版本
- npm 或 yarn 套件管理器

### 環境設定

```bash
1. 複製 `.env.example` 到 `.env`：
2. 在 `.env` 文件中設定您的 REACT_APP_TMDB_API_KEY
```

### 開發模式運行

```bash
yarn install
yarn start
```

應用程式將在 http://localhost:3000 運行

### 部署

本專案使用 Vercel 進行自動化部署：

1. 每次推送到 `master` 分支時，都會自動觸發部署流程
2. Vercel 會自動執行建置和部署
3. 部署完成後可在 Vercel 提供的網址訪問
