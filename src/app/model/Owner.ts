
import * as models from './models';

export interface Owner {
    displayName?: string;

    email?: string;

    id?: number;

    name?: string;

    status?: Owner.StatusEnum;

}
export namespace Owner {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        INACTIVE = <any> 'INACTIVE',
        DELETED = <any> 'DELETED'
    }
}
