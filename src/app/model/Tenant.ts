
import * as models from './models';

export interface Tenant {
    id?: number;

    locale?: string;

    name?: string;

    status?: Tenant.StatusEnum;
}

export namespace Tenant {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        INACTIVE = <any> 'INACTIVE',
        DELETED = <any> 'DELETED'
    }
}
