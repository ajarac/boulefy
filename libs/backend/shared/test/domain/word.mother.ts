import { lorem } from 'faker'

export class WordMother {
    static random(): string {
        return lorem.word()
    }
}
