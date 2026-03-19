require("dotenv").config();
const express = require("express");
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🚀 Auth Server running on http://localhost:${PORT}`);
});