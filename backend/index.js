const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

// --- 🔒 YOUR SECRETS ---
const SECRETS = {
    password: "sereansh", 
    vaultMessage: "My Dearest Anshul, you are my safe space, my home, and my greatest adventure. I love you endlessly. Every beat of my heart belongs to you. ❤️",
};

app.get('/', (req, res) => res.send("Server Running"));

// Vault Check
app.post('/api/unlock', (req, res) => {
    const { pass } = req.body;
    if (pass && pass.toLowerCase().trim() === SECRETS.password) {
        res.json({ success: true, message: SECRETS.vaultMessage });
    } else {
        const roasts = ["Nice try! 🤡", "Wrong password!", "Access Denied!", "Are you even Anshul?"];
        res.json({ success: false, error: roasts[Math.floor(Math.random() * roasts.length)] });
    }
});

// Admin Check
app.post('/api/admin', (req, res) => {
    const { pass } = req.body;
    if (pass && pass.toLowerCase().trim() === SECRETS.password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));