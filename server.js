const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Rank = require('./models/Rank');
const authRoutes = require('./routes/auth');
const storeRoutes = require('./routes/store');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);
app.use('/store', storeRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
