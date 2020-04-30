import * as uuidv4 from 'uuidv4'

export class UuidGeneratorService {
    static generate(): string {
        return uuidv4.uuid()
    }

    static check(uuid: string): boolean {
        return uuidv4.isUuid(uuid)
    }
}
