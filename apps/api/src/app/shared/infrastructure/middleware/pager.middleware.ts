import { Injectable, NestMiddleware } from '@nestjs/common'

@Injectable()
export class PagerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        req.query.page = +req.query.page || 1
        req.query.limit = +req.query.limit && +req.query.limit < 100 ? +req.query.limit : 25
        next()
    }
}
