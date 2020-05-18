import { random } from 'faker'

export class NumberMother {
    static random(): number {
        return random.number()
    }
}
