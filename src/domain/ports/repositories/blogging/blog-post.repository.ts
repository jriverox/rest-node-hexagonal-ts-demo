import BlogPost from '../../../entities/blogging/blog-post'
import PagedFilter from '../../../common/paged-filter'

export default interface BlogPostRepository {
  save(entity: BlogPost): Promise<boolean>
  findOne(filter: object): Promise<BlogPost>
  find(filter: PagedFilter): Promise<BlogPost[]>
  delete(filter: object): Promise<boolean>
}
