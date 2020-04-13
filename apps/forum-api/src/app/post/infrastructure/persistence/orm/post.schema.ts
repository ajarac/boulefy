import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class PostSchema {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    counterMessages: number;

    @Column()
    ranking: number;
}


