/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'koa'
import UserService from '../../../domain/services/common/user.service'
import UserRepository from '../../database/adapters/user.respository.mongodb'
import User from '../../../domain/entities/common/user'

const repository = new UserRepository()
const service = new UserService(repository)

export default class UserController {
  async register(ctx: Context): Promise<any> {
    const data = ctx.request.body as User
    const result = await service.register(data)
    if (result.success) {
      ctx.status = 201
    } else {
      ctx.throw(400, result.errorMessages[0])
    }
  }
}
