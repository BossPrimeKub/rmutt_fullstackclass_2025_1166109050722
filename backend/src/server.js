
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const scheduleRoutes        = require('./routes/scheduleRoutes');
const equipmentRoutes       = require('./routes/equipmentRoutes');
const dietplansRoutes       = require('./routes/dietplansRoutes');
const progressreportsRoutes = require('./routes/progressreportsRoutes');
const authRoutes            = require('./routes/authRoutes');

app.use('/api/auth',           authRoutes);
app.use('/api/schedules',      scheduleRoutes);
app.use('/api/equipment',      equipmentRoutes);
app.use('/api/dietplans',      dietplansRoutes);
app.use('/api/progressreports', progressreportsRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));