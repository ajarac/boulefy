import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CommentResponse } from '@shared/models/comment/comment.response'
import { Environment } from '../../../../environments/environment.model'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'

@Injectable()
export class CommentService {
    private readonly baseUrl: string = this.config.api

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    getCommentsByPostId(postId: string): Observable<CommentResponse[]> {
        const url: string = `${this.baseUrl}posts/${postId}/comments`
        return this.http.get<CommentResponse[]>(url)
    }

    create(content: string, postId: string): Observable<string> {
        const id: string = UuidGeneratorService.generate()
        const url: string = `${this.baseUrl}comments/${id}`
        return this.http
            .post<void>(url, { content, postId })
            .pipe(map(() => id))
    }
}
