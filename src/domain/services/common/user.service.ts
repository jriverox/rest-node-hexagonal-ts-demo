import User from '../../entities/common/user'
import UserRepository from '../../ports/repositories/common/user.repository'
import OperationResult from '../../common/operation-result'
import commonValidators from '../../common/common-validations'
import PagedFilter from '../../common/paged-filter'

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
    if (!user) return OperationResult.fail('Ivalid user')
    if (!commonValidators.validatePersonName(user.firstName)) errors.push('Ivalid first name')
    if (!commonValidators.validatePersonName(user.lastName)) errors.push('Ivalid last name')
    if (!commonValidators.validateAlphanumeric(user.userName)) errors.push('Ivalid user name')
    if (errors.length > 0) return OperationResult.failMultipleErrors(errors)
    return OperationResult.ok()
  }

  async findOne(filter: object): Promise<User> {
    return await this.userRepository.findOne(filter)
  }

  async find(filter: PagedFilter): Promise<User[]> {
    return await this.userRepository.find(filter)
  }
}
