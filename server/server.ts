import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import Contact, { userContact } from './db/dbContact';

const app: Express = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(`${process.env.GETELLERDB}`, {});

app.get('/', (req: Request, res: Response) =>
  res.status(200).send('welcome gamers')
);

app.post('/api/contact/create', (req: Request, res: Response) => {
  const { firstName, lastName, email, message, contactDate } = req.body;

  const dbContact: userContact = {
    firstName,
    lastName,
    email,
    message,
    contactDate,
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

  if (dbContact.email.length < 10 || dbContact.email.length > 40) {
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
      error: 'Message must be at least 5 characters',
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
