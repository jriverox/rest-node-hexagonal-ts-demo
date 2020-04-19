import User from '../../entities/common/user'
import UserRepository from '../../ports/repositories/common/user.repository'
import OperationResult from '../../common/operation-result'
import commonValidators from '../../common/common-validations'
import PagedQuery from '../../common/paged-query'

export default class UserService {
  userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async register(user: User): Promise<OperationResult> {
    const validationResult = this.validateUser(user)
    if (!validationResult.success) return validationResult
    const exists = await this.userRepository.exists({ userName: user.userName })
    if (exists) return OperationResult.fail('User already exists')
    await this.userRepository.save(user)
    return OperationResult.ok()
  }

  validateUser(user: User): OperationResult {
    const errors = []
    console.log(user)
    if (!user) return OperationResult.fail('Ivalid user')
    if (!commonValidators.validatePersonName(user.firstName)) errors.push('Ivalid first name')
    if (!commonValidators.validatePersonName(user.lastName)) errors.push('Ivalid last name')
    if (!commonValidators.validateAlphanumeric(user.userName)) errors.push('Ivalid user name')
    if (errors.length > 0) return OperationResult.failMultipleErrors(errors)
    return OperationResult.ok()
  }

  async findOne(query: object): Promise<User> {
    return await this.userRepository.findOne(query)
  }

  async find(query: PagedQuery): Promise<User[]> {
    return await this.userRepository.find(query)
  }

  async delete(userName: string): Promise<OperationResult> {
    const filter = { userName: userName }
    const exists = await this.userRepository.exists(filter)
    if (!exists) return OperationResult.fail('User does not exists')

    const success = await this.userRepository.delete(filter)
    if (success) return OperationResult.ok()
    else return OperationResult.fail('User does not exists')
  }
}
