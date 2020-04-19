import Blog from '../../../entities/blogging/blog'
import PagedFilter from '../../../common/paged-filter'

export default interface BlogRepository {
  save(entity: Blog): Promise<boolean>
  findOne(filter: object): Promise<Blog>
  find(filter: PagedFilter): Promise<Blog[]>
  delete(filter: object): Promise<boolean>
}
