require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected.");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
