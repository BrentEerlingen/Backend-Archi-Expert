import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./archiexpert.datasource.json');

export class ArchiexpertDataSource extends juggler.DataSource {
  static dataSourceName = 'archiexpert';

  constructor(
    @inject('datasources.config.archiexpert', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
