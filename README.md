# Vue 3 Web Component 範例專案

這個專案示範如何使用 Vite 和 TypeScript 構建 Vue 3 Web Component。透過這個範例，您可以學習如何將 Vue 3 元件打包成可重用的 Web Component，並在任何 HTML 頁面中使用。

## ✨ 功能特色

- 🚀 使用 Vite 快速構建和開發
- 💪 TypeScript 支援，提供完整的型別檢查
- 🔧 Vue 3 Composition API 與 `<script setup>` 語法
- 📦 Web Component 打包，可在任何框架中使用
- 🎨 Scoped CSS 樣式隔離
- 🎭 Props 和 Events 支援

## 📋 系統需求

- Node.js 16.0 或更高版本
- npm 或 yarn 套件管理器

## 🚀 快速開始

### 安裝相依套件

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:5173](http://localhost:5173) 查看範例。

### 建置 Web Component

```bash
npm run build
```

建置完成後，會在 `dist` 資料夾中產生以下檔案：
- `custom-elements.es.js` - ES Module 格式
- `custom-elements.cjs.js` - CommonJS 格式

### 預覽建置結果

```bash
npm run preview
```

## 📖 使用方式

### 在 HTML 中使用

建置完成後，您可以在任何 HTML 頁面中使用 Web Component：

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Web Component 範例</title>
</head>
<body>
  <!-- 引入建置後的 Web Component -->
  <script type="module">
    import { register } from './dist/custom-elements.es.js';
    register();
  </script>
  
  <!-- 使用自定義元素 -->
  <my-footer title="我的自定義頁尾"></my-footer>
  
  <!-- 監聽事件 -->
  <script>
    document.querySelector('my-footer').addEventListener('onTrigger', (e) => {
      console.log('接收到事件：', e.detail);
      alert(e.detail[0].message);
    });
  </script>
</body>
</html>
```

### Props 屬性

`my-footer` 元件支援以下屬性：

| 屬性名稱 | 型別 | 預設值 | 說明 |
|---------|------|--------|------|
| `title` | string | 'Default Footer' | 頁尾標題文字 |

### Events 事件

| 事件名稱 | 參數型別 | 說明 |
|---------|---------|------|
| `onTrigger` | `{ message: string }` | 當按鈕被點擊時觸發 |

## 📁 專案結構

```
vue-web-component-example/
├── src/
│   ├── components/
│   │   └── MyFooter.ce.vue     # Web Component 元件
│   ├── main.ce.ts              # Web Component 入口點
│   └── main.ts                 # 開發模式入口點
├── vite.config.ts              # Vite 設定檔
├── package.json                # 套件相依設定
└── index.html                  # 開發用 HTML 頁面
```

## 🛠️ 開發指南

### 建立新的 Web Component

1. 在 `src/components/` 中建立新的 `.ce.vue` 檔案
2. 使用 Vue 3 Composition API 編寫元件
3. 在 `src/main.ce.ts` 中註冊新元件

範例：

```vue
<script setup lang="ts">
defineProps<{
  message?: string
}>()

const emit = defineEmits<{
  onAction: [value: { data: any }]
}>()
</script>

<template>
  <div class="my-component">
    {{ message }}
  </div>
</template>

<style scoped>
.my-component {
  /* 樣式會被隔離 */
}
</style>
```

### 設定說明

- **TypeScript 設定**：使用 `tsconfig.json` 進行型別檢查設定
- **Vite 設定**：`vite.config.ts` 中設定了 Web Component 的構建選項
- **Vue 設定**：支援自定義元素的編譯選項

## 📚 相關資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Vite 官方文件](https://vitejs.dev/)
- [Vue 3 Custom Elements](https://vuejs.org/guide/extras/web-components.html)

## 📄 授權

MIT License
