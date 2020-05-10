import { uuid } from 'uuidv4'

export class IdentifierMother {
    static random(): string {
        return uuid()
    }
}
