
import * as models from './models';

export interface Pet {
    birthDate?: string;

    id?: number;

    name?: string;

    status?: Pet.StatusEnum;

}
export namespace Pet {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        INACTIVE = <any> 'INACTIVE',
        DELETED = <any> 'DELETED'
    }
}
