import { Post } from '@forum-api/post/domain/post'
import { BaseMongoRepository } from '@backend/shared/intrastructure/persistence/mongo/base-mongo.repository'

export abstract class PostRepository extends BaseMongoRepository<Post> {}
