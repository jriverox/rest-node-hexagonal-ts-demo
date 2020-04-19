/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'koa'
import UserService from '../../../domain/services/common/user.service'
import UserRepository from '../../database/adapters/user.respository.mongodb'
import User from '../../../domain/entities/common/user'
import PagedQuery from '../../../domain/common/paged-query'

const repository = new UserRepository()
const service = new UserService(repository)

export default class UserController {
  async register(ctx: Context): Promise<any> {
    const user = User.createFromObject(ctx.request.body)
    const result = await service.register(user)
    if (result.success) {
      ctx.status = 201
    } else {
      ctx.throw(400, result.errorMessages[0])
    }
  }

  async find(ctx: Context): Promise<any> {
    const body = ctx.request.body
    const filter = body.filter || {}
    const page = body.page ? parseInt(body.page) : 1
    const size = body.size ? parseInt(body.size) : 10
    const query = new PagedQuery(filter, size, page)
    const result = await service.find(query)
    if (result && result.length > 0) {
      ctx.body = result
    } else {
      ctx.throw(404, 'There are no users with this criteria')
    }
  }

  async findByUsername(ctx: Context): Promise<any> {
    const username = ctx.params.username
    const query = { userName: username }
    const result = await service.findOne(query)
    if (result) {
      ctx.body = result
    } else {
      ctx.throw(404, `There is not a user with the username: ${username}`)
    }
  }

  async delete(ctx: Context): Promise<any> {
    const username = ctx.params.username
    const result = await service.delete(username)
    if (result.success) {
      ctx.status = 200
    } else {
      ctx.throw(404, `There is not a user with the username: ${username}`)
    }
  }
}
