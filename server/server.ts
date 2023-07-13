import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import Contact, { userContact } from './db/dbContact';
import { validateContact } from './scripts/validation';

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

  let response: { status: string; error: string } = validateContact(dbContact);

  if (response.status === 'Error') {
    return res.status(400).json({
      status: 'Error',
      error: response.error,
    });
  } else {
    Contact.create(dbContact, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
