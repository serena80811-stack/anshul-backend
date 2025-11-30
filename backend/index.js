const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows frontend to connect
app.use(express.json());

// --- 🔒 ASLI SECRETS (Sirf Server par rahenge) ---
const SECRETS = {
    password: "sereansh", 
    vaultMessage: "My Dearest Anshul, you are my safe space, my home, and my greatest adventure. I love you endlessly. Every beat of my heart belongs to you. ❤️",
};

app.get('/', (req, res) => {
    res.send("Server is Active & Secure! 🔒");
});

// Verify Password Route
app.post('/verify', (req, res) => {
    const { password } = req.body;

    if (!password) return res.json({ success: false, message: "Password required" });

    // Server check karega
    if (password.toLowerCase().trim() === SECRETS.password) {
        res.json({ 
            success: true, 
            message: SECRETS.vaultMessage 
        });
    } else {
        const roasts = [
            "Nice try! 🤡", 
            "Wrong password bro! 😂", 
            "Access Denied! 🚫",
            "Are you even Anshul? 🤨"
        ];
        res.json({ 
            success: false, 
            message: roasts[Math.floor(Math.random() * roasts.length)] 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
