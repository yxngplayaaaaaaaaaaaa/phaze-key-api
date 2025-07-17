const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

let currentKey = generateKey();

function generateKey() {
    return 'PHAZE-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

setInterval(() => {
    currentKey = generateKey();
    console.log('🔐 Key:', currentKey);
}, 3 * 60 * 60 * 1000); // every 3 hours

app.get('/', (req, res) => {
    res.send("Phaze Key API is running.");
});

app.get('/key', (req, res) => {
    res.send(currentKey);
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
