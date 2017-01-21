
import * as models from './models';

export interface Booking {
    availability?: models.Availability;

    id?: number;

    pet?: models.Pet;

}
