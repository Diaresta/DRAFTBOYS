import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },

  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },

  email: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 40,
  },

  message: {
    type: String,
    required: true,
    minLength: 5,
  },
  contactDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('Contact', contactSchema);
