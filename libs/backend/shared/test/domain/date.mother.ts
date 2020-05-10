import { date } from 'faker'

export class DateMother {
    static random(): Date {
        return date.past()
    }
}
