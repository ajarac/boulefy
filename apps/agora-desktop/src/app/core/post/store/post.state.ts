import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { Dictionary } from '../../shared/models/dictionary'
import { Post } from '../models/post'
import { PostService } from '../services/post.service'
import { LoadPosts, PostsLoaded } from './post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

interface IPostState {
    entities: Post[]
}

@State<IPostState>({
    name: 'post',
    defaults: {
        entities: []
    }
})
@Injectable()
export class PostState implements NgxsOnInit {
    @Selector()
    static getPosts({ entities }: IPostState): Post[] {
        return entities
    }

    constructor(private service: PostService) {}

    ngxsOnInit({ dispatch }: StateContext<IPostState>): void {
        dispatch(new LoadPosts())
    }

    @Action(LoadPosts)
    load({ dispatch }): Observable<Post[]> {
        return this.service.getPosts().pipe(tap((posts: Post[]) => dispatch(new PostsLoaded(posts))))
    }

    @Action(PostsLoaded)
    loaded({ setState }: StateContext<IPostState>, { posts }: PostsLoaded): void {
        setState({ entities: posts })
    }
}
