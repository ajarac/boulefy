import * as faker from 'faker';

export class NumberMother {
    static random(): number {
        return faker.random.number();
    }
}
