import mongoose from 'mongoose'
import UserModel from '../models/user.model'
import UserRepositoryPort from '../../../domain/ports/repositories/common/user.repository'
import User from '../../../domain/entities/common/user'
import PagedFilter from '../../../domain/common/paged-filter'

export default class UserRepositoryMongoDB implements UserRepositoryPort {
  async save(user: User): Promise<boolean> {
    const filter = { userName: user.userName }
    const options = { upsert: true }
    await UserModel.updateOne(filter, user, options)
    return true
  }

  async findOne(filter: object): Promise<User> {
    const doc = await UserModel.findOne(filter)
    return this.mongooseDocumentToEntity(doc)
  }

  async find(filter: PagedFilter): Promise<User[]> {
    const result: User[] = []
    const docs = await UserModel.find(filter.filter).skip(filter.getSkip()).limit(filter.rows)
    if (docs.length > 0) {
      docs.forEach((doc) => {
        result.push(this.mongooseDocumentToEntity(doc))
      })
    }
    return result
  }

  async delete(filter: object): Promise<boolean> {
    await UserModel.deleteOne(filter)
    return true
  }

  async exists(filter: object): Promise<boolean> {
    return await UserModel.exists(filter)
  }

  private mongooseDocumentToEntity(doc: mongoose.Document | null): User {
    const user = (doc as unknown) as User
    // if (doc) {
    //   user.email = doc.get('email', String)
    //   user.active = doc.get('active', Boolean)
    //   user.firstName = doc.get('firstName', String)
    //   user.lastName = doc.get('lastName', String)
    //   user.userName = doc.get('userName', String)
    // }
    return user
  }
}
