const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend
app.use(express.static('public'));

// API route
app.get('/api/products', (req, res) => {
    res.json([
        { name: "Shoes", price: 50 },
        { name: "Jacket", price: 120 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});