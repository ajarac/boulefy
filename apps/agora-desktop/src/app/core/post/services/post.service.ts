import { Injectable, Injector } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { PostResponse } from '@shared/models/post/post.response'
import { Pagination } from '@shared/models/pagination/pagination'
import { BaseService } from '@agora-desktop/core/shared/services/base.service'
import { ListQuery } from '@agora-desktop/core/shared/models/list-query'

@Injectable()
export class PostService extends BaseService {
    private readonly baseUrl: string = this.config.api + 'posts'

    constructor(injector: Injector) {
        super(injector)
    }

    getPosts(query: ListQuery): Observable<Pagination<PostResponse>> {
        return this.http.get<Pagination<PostResponse>>(this.baseUrl, { params: query.getHttpParams() })
    }

    getPostById(id: string): Observable<PostResponse> {
        const url: string = `${this.baseUrl}/${id}`
        return this.http.get<PostResponse>(url)
    }

    create(title: string, content: string): Observable<string> {
        const id: string = UuidGeneratorService.generate()
        const url: string = `${this.baseUrl}/${id}`
        return this.http
            .post<void>(url, { title, content })
            .pipe(map(() => id))
    }
}
