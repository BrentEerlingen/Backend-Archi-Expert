import { Entity } from '@loopback/repository';
export declare class archiexpert extends Entity {
    id: number;
    question: string;
    awnserA: string;
    awnserB?: string;
    awnserC?: string;
    awnserD?: string;
    constructor(data?: Partial<archiexpert>);
}
