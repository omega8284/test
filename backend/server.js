require('dotenv').config(); // For environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // For logging requests
const mongoose = require('mongoose');
const multer = require('multer'); // For handling file uploads
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for the contact data
const contactSchema = new mongoose.Schema({
  title: String,
  name: String,
  email: String,
  subject: String,
  message: String,
  file: {
    data: Buffer,
    contentType: String
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(morgan('dev')); // Log requests to the console

// Multer setup for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// POST endpoint to handle form submissions
app.post('/submit', upload.single('file'), async (req, res) => {
  try {
    const { title, name, email, subject, message } = req.body;
    const file = req.file ? { data: req.file.buffer, contentType: req.file.mimetype } : null;

    const contact = new Contact({
      title,
      name,
      email,
      subject,
      message,
      file
    });

    await contact.save();

    // Respond with success
    res.json({ success: true });
  } catch (error) {
    // Log the error
    console.error('Error:', error);

    // Respond with error
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve saved contacts
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    // Log the error
    console.error('Error:', error);

    // Respond with error
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve a file by contact ID
app.get('/file/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact || !contact.file) {
      return res.status(404).json({ success: false, message: 'File not found' });
    }

    res.set('Content-Type', contact.file.contentType);
    res.set('Content-Disposition', `attachment; filename=contact-file`);
    res.send(contact.file.data);
  } catch (error) {
    // Log the error
    console.error('Error:', error);

    // Respond with error
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
