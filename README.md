# Node.js URL Redirector

## 簡介
這是一個簡單的 Node.js 函數，用於處理 URL 重定向。當接收到一個請求時，它會根據請求的路徑生成一個新的 URL 並進行 302 重定向。此專案適合用於需要經常重定向流量的 API 或網站應用。

## 功能
- 接收一個 URL 請求並從中獲取路徑信息
- 根據預定義的基本 URL 生成重定向 URL
- 將用戶重定向到指定的 URL

## 安裝與使用方式
1. 確保已安裝 [Node.js](https://nodejs.org/) 環境。
2. 將本專案克隆到本地:
    ```bash
    git clone https://github.com/your-username/node-url-redirector.git
    cd node-url-redirector
    ```
3. 如果需要，安裝相關的依賴模組（該示例不需要外部依賴）。
4. 可以在 AWS Lambda 之類的雲服務中部署該函數，或在本地環境中進行測試。

## 必要的依賴模組清單
這個專案目前不需要任何外部依賴模組。

## 授權條款
本專案採用 MIT 授權條款，詳情請參見 [LICENSE](LICENSE) 文件。