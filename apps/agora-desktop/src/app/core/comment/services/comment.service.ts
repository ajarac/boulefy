import { Injectable, Injector } from '@angular/core'
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CommentResponse } from '@shared/models/comment/comment.response'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { BaseService } from '@agora-desktop/core/shared/services/base.service'
import { Pagination } from '@shared/models/pagination/pagination'

@Injectable()
export class CommentService extends BaseService {
    private readonly baseUrl: string = this.config.api

    constructor(injector: Injector) {
        super(injector)
    }

    getCommentsByPostId(postId: string, page: number): Observable<Pagination<CommentResponse>> {
        const url: string = `${this.baseUrl}posts/${postId}/comments`
        const params: HttpParams = new HttpParams().set('page', page.toString())
        return this.http.get<Pagination<CommentResponse>>(url, { params })
    }

    create(content: string, postId: string): Observable<string> {
        const id: string = UuidGeneratorService.generate()
        const url: string = `${this.baseUrl}comments/${id}`
        return this.http
            .post<void>(url, { content, postId })
            .pipe(map(() => id))
    }
}
