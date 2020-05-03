import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Environment } from '../../../../environments/environment.model'
import { Post } from '@agora-desktop/core/post/models/post'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'

@Injectable()
export class PostService {
    private readonly baseUrl: string = this.config.api + 'posts'

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl)
    }

    getPostById(id: string): Observable<Post> {
        const url: string = `${this.baseUrl}/${id}`
        return this.http.get<Post>(url)
    }

    create(title: string, content: string): Observable<string> {
        const id: string = UuidGeneratorService.generate()
        const url: string = `${this.baseUrl}/${id}`
        return this.http
            .post<void>(url, { title, content })
            .pipe(map(() => id))
    }
}
