const { WebcastPushConnection } = require('tiktok-live-connector');
const WebSocket = require('ws');

let tiktokUsername = "NameHere"; // put name here of the livestream

let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername, {
    enableExtendedGiftInfo: true  
});

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');

    ws.send(JSON.stringify({ message: "Welcome to the TikTok Live Interaction Feed!" }));

    tiktokLiveConnection.on('chat', data => {
        ws.send(`chat event triggered by ${data.uniqueId}: ${data.comment}`);
    });

    tiktokLiveConnection.on('gift', data => {
        ws.send(`gift event triggered by ${data.uniqueId}: ${data.giftName}`);
    });

    tiktokLiveConnection.on('like', data => {
        ws.send(`like event triggered by ${data.uniqueId}`);
    });

    tiktokLiveConnection.on('follow', data => {
        ws.send(`follow event triggered by ${data.uniqueId}`);
    });

    tiktokLiveConnection.on('share', data => {
        ws.send(`share event triggered by ${data.uniqueId}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

tiktokLiveConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
    console.error('Failed to connect', err);
});
