const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/channels', async (req, res) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/AJ-Ashik/Assets/main/iptv.json'); // Replace with your JSON URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const channels = await response.json();
        res.json(channels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to load channels' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
