export class IdentifierNotValid extends Error {
    constructor(id: string) {
        super(`Identifier ${id} not valid`)
    }
}
