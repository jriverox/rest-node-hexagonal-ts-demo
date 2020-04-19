import User from '../../../entities/common/user'
import PagedFilter from '../../../common/paged-filter'

export default interface UserRepository {
  save(user: User): Promise<boolean>
  findOne(filter: object): Promise<User>
  find(filter: PagedFilter): Promise<User[]>
  delete(filter: object): Promise<boolean>
  exists(filter: object): Promise<boolean>
}
