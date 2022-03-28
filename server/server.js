import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Contact from './db/dbContact.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.GETELLERDB, {});

app.get('/', (req, res) => res.status(200).send('welcome gamers'));

// Create contact message in db
app.post('/api/contact/create', async (req, res) => {
  const dbContact = await {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
    contactDate: req.body.contactDate,
  };

  if (!dbContact.firstName || typeof dbContact.firstName !== 'string') {
    return res.status(400).json({
      status: 'Error',
      error: 'Please enter a valid first name',
    });
  }
  if (dbContact.firstName.length < 2 || dbContact.firstName.length > 20) {
    return res.status(400).json({
      status: 'Error',
      error: 'First name must be 2- 20 characters',
    });
  }
  if (!dbContact.lastName || typeof dbContact.lastName !== 'string') {
    return res.status(400).json({
      status: 'Error',
      error: 'Please enter a valid last name',
    });
  }
  if (dbContact.lastName.length < 2 || dbContact.lastName.length > 30) {
    return res.status(400).json({
      status: 'Error',
      error: 'Last name must be 2- 30 characters',
    });
  }
  if (!dbContact.email || typeof dbContact.email !== 'string') {
    return res.status(400).json({
      status: 'Error',
      error: 'Please enter a valid email',
    });
  }
  if (dbContact.email.length < 2 || dbContact.email.length > 40) {
    return res.status(400).json({
      status: 'Error',
      error: 'Email must be 10- 40 characters',
    });
  }
  if (!dbContact.message || typeof dbContact.message !== 'string') {
    return res.status(400).json({
      status: 'Error',
      error: 'Please enter a valid message',
    });
  }
  if (dbContact.message.length < 5) {
    return res.status(400).json({
      status: 'Error',
      error: 'Mesage name must be at least 6 characters',
    });
  }
  Contact.create(dbContact, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
