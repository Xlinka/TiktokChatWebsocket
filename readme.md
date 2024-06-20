# TikTok Live Interaction Feed

This project sets up a Node.js server to receive TikTok live stream events such as comments, gifts, likes, follows, and shares in real-time using the `tiktok-live-connector` library and sends these events over a WebSocket connection to connected clients.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/tiktok-live-interaction-feed.git
    cd tiktok-live-interaction-feed
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Update the username in the `server.js` file with the TikTok username of someone who is currently live:

    ```javascript
    let tiktokUsername = "officialgeilegisela";
    ```

2. Run the server:

    ```bash
    node server.js
    ```

    The server will start on `ws://localhost:8080`.