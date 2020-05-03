import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Comment } from '@agora-desktop/core/post/models/comment'
import { Environment } from '../../../../environments/environment.model'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { map } from 'rxjs/operators'

@Injectable()
export class CommentService {
    private readonly baseUrl: string = this.config.api + 'comments'

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    getCommentsByPostId(postId: string): Observable<Comment[]> {
        const url: string = `${this.baseUrl}/${postId}`
        return this.http.get<Comment[]>(url)
    }

    create(content: string, postId: string): Observable<string> {
        const id: string = UuidGeneratorService.generate()
        const url: string = `${this.baseUrl}/${id}`
        return this.http
            .post<void>(url, { content, postId })
            .pipe(map(() => id))
    }
}
