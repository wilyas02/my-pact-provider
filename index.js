require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api/user/1', (req, res) => {
    res.json({ id: 1, name: 'John Doe', age: 8 }); // Matches what consumer expects
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Provider API running on port ${PORT}`);
});
