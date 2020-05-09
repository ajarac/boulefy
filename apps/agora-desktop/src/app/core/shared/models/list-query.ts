import { HttpParams } from '@angular/common/http'

interface IListQuery {
    page: number
    limit: number
    search: string
}

interface ListQueryJson {
    page: string
    limit: string
    search: string
}

export class ListQuery {
    private readonly _page: number
    private readonly _limit: number
    private readonly _search: string

    constructor({ page, limit, search }: Partial<IListQuery>) {
        this._page = page
        this._limit = limit
        this._search = search
    }

    get page(): string {
        return this._page ? this._page.toString() : null
    }

    get limit(): string {
        return this._limit ? this._limit.toString() : null
    }

    get search(): string {
        return this._search || null
    }

    getHttpParams(): HttpParams {
        const query: Partial<ListQueryJson> = {}
        if (this.page) {
            query.page = this.page
        }
        if (this.limit) {
            query.limit = this.limit
        }
        if (this.search) {
            query.search = this.search
        }
        return new HttpParams({ fromObject: query })
    }
}
