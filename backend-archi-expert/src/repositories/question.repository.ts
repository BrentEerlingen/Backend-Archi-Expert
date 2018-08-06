import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/context';
import { archiexpert } from '../models';

export class QuestionRepository extends DefaultCrudRepository<
  archiexpert,
  typeof archiexpert.prototype.id
  > {
  constructor(@inject('datasources.archiexpert') protected db: juggler.DataSource) {
    super(archiexpert, db);
  }
}
