const express = require('express');
const https = require('https');
const app = express();

app.get('/api/channels', (req, res) => {
    const url = 'https://raw.githubusercontent.com/AJ-Ashik/Assets/main/iptv.json'; // Replace with your JSON URL

    https.get(url, (response) => {
        let data = '';

        // A chunk of data has been received.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        response.on('end', () => {
            try {
                const channels = JSON.parse(data);
                res.json(channels);
            } catch (error) {
                res.status(500).json({ error: 'Failed to parse JSON' });
            }
        });
    }).on('error', (err) => {
        res.status(500).json({ error: 'Failed to load channels' });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
