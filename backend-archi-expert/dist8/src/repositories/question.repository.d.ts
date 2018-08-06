import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { archiexpert } from '../models';
export declare class QuestionRepository extends DefaultCrudRepository<archiexpert, typeof archiexpert.prototype.id> {
    protected db: juggler.DataSource;
    constructor(db: juggler.DataSource);
}
