import BlogPost from '../../../entities/blogging/blog-post'
import PagedQuery from '../../../common/paged-query'

export default interface BlogPostRepository {
  save(entity: BlogPost): Promise<boolean>
  findOne(filter: object): Promise<BlogPost>
  find(filter: PagedQuery): Promise<BlogPost[]>
  delete(filter: object): Promise<boolean>
}
