import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class PostSchema {
    @ObjectIdColumn()
    _id: ObjectID;

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    counterMessages: number;

    @Column()
    ranking: number;
}


