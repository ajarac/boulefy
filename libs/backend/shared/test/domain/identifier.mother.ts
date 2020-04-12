import * as uuidv4 from 'uuidv4';

export class IdentifierMother {
    static random(): string {
        return uuidv4.uuid();
    }
}
