import { juggler, AnyObject } from '@loopback/repository';
export declare class ArchiExpertDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
