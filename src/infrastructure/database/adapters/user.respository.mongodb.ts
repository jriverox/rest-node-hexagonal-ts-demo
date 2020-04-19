import mongoose from 'mongoose'
import UserModel from '../models/user.model'
import UserRepositoryPort from '../../../domain/ports/repositories/common/user.repository'
import User from '../../../domain/entities/common/user'
import PagedQuery from '../../../domain/common/paged-query'

export default class UserRepositoryMongoDB implements UserRepositoryPort {
  async save(user: User): Promise<boolean> {
    console.log('UserRepositoryMongoDB save user', user)
    const filter = { userName: user.userName }
    const options = { upsert: true }
    await UserModel.updateOne(filter, user, options)
    return true
  }

  async findOne(query: object): Promise<User> {
    const doc = await UserModel.findOne(query)
    return this.mongooseDocumentToEntity(doc)
  }

  async find(query: PagedQuery): Promise<User[]> {
    const result: User[] = []
    console.log(`find query.filter: ${JSON.stringify(query.filter)} skip: ${query.getSkip()} size: ${query.size}`)
    const docs = await UserModel.find(query.filter).skip(query.getSkip()).limit(query.size)
    console.log('docs.length', docs.length)
    if (docs.length > 0) {
      docs.forEach((doc) => {
        result.push(this.mongooseDocumentToEntity(doc))
      })
    }
    return result
  }

  async delete(query: object): Promise<boolean> {
    await UserModel.deleteOne(query)
    return true
  }

  async exists(query: object): Promise<boolean> {
    return await UserModel.exists(query)
  }

  private mongooseDocumentToEntity(doc: mongoose.Document | null): User {
    const user = (doc as unknown) as User
    return user
  }
}
