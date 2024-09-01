const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/channels', (req, res) => {
    fs.readFile('iptv.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load channels' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
