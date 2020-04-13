import { InMemoryPostRepository } from '@backend/forum/post/infrastructure/persistence/in-memory-post.repository';
import { Post, PostId } from '@backend/forum/post/domain';
import { PostIdMother, PostMother } from '@backend/forum/post/test/domain';

describe('InMemoryPostRepository', () => {

    let repository: InMemoryPostRepository;

    beforeEach(() => {
        repository = new InMemoryPostRepository();
    });

    it('should save a post', () => {
        const post: Post = PostMother.random();

        repository.save(post);

        expect(true).toBeTruthy();
    });


    it('should return an existing course', () => {
        const post: Post = PostMother.random();

        repository.save(post);

        expect(repository.search(post.id)).toEqual(post);
    });

    it('should not return a non existing course', () => {
        const postId: PostId = PostIdMother.random();

        expect(repository.search(postId)).toBeUndefined();
    });
});
