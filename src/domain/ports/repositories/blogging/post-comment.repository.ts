import PostComment from '../../../entities/blogging/post-comment'
import PagedQuery from '../../../common/paged-query'

export default interface PostCommentRepository {
  save(entity: PostComment): Promise<boolean>
  findOne(filter: object): Promise<PostComment>
  find(filter: PagedQuery): Promise<PostComment[]>
  delete(filter: object): Promise<boolean>
}
