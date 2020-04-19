import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    active: Boolean,
  },
  { collection: 'users' },
)

export default mongoose.model('BlogModel', schema)
