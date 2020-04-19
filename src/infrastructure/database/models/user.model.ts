import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
  },
  { collection: 'users' },
)

export default model('User', userSchema)
