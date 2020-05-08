import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Environment } from '../../../../environments/environment.model'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { PostResponse } from '@shared/models/post/post.response'

@Injectable()
export class PostService {
    private readonly baseUrl: string = this.config.api + 'posts'

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    getPosts(page: number): Observable<PostResponse[]> {
        const params: HttpParams = new HttpParams().set('page', page.toString())
        return this.http.get<PostResponse[]>(this.baseUrl, { params })
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
