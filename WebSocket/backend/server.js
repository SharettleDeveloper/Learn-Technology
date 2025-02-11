const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);

// WebSocket サーバーを作成（HTTP サーバーと連携）
const wss = new WebSocket.Server({ server });

// クライアント接続時の処理
wss.on("connection", (ws) => {
  console.log("新しいクライアントが接続しました");

  // メッセージ受信時の処理
  ws.on("message", (message) => {
    console.log("受信メッセージ:", message);

    // 受信したメッセージを他の全クライアントにブロードキャスト
    wss.clients.forEach((client) => {
      //   console.log(client);
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
        console.log(`クライアントにメッセージを送信しました。送信内容:${message}`);
      }
    });
  });

  ws.on("close", () => {
    console.log("クライアントが切断しました");
  });
});

// サーバー起動
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`WebSocket サーバーがポート ${PORT} で起動しました`);
});
