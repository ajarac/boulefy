import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Environment } from '../../../../environments/environment.model'
import { Post } from '@agora-desktop/core/post/models/post'


@Injectable()
export class PostService {
    private readonly baseUrl: string = this.config.api + 'forum/posts'

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl)
    }
}
