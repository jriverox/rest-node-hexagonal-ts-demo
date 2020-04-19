import Blog from '../../../entities/blogging/blog'
import PagedQuery from '../../../common/paged-query'

export default interface BlogRepository {
  save(entity: Blog): Promise<boolean>
  findOne(filter: object): Promise<Blog>
  find(filter: PagedQuery): Promise<Blog[]>
  delete(filter: object): Promise<boolean>
}
