import PostComment from '../../../entities/blogging/post-comment'
import PagedFilter from '../../../common/paged-filter'

export default interface PostCommentRepository {
  save(entity: PostComment): Promise<boolean>
  findOne(filter: object): Promise<PostComment>
  find(filter: PagedFilter): Promise<PostComment[]>
  delete(filter: object): Promise<boolean>
}
