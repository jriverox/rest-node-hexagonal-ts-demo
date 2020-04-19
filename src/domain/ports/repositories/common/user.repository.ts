import User from '../../../entities/common/user'
import PagedQuery from '../../../common/paged-query'

export default interface UserRepository {
  save(user: User): Promise<boolean>
  findOne(query: object): Promise<User>
  find(query: PagedQuery): Promise<User[]>
  delete(query: object): Promise<boolean>
  exists(query: object): Promise<boolean>
}
