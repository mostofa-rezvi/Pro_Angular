import { Location } from "../../Location/model/location.model"

export class Student {
    id!: string;
    name!: string;
    email!: string;
    cell!: string;
    location!: {
        id?: string;
        name?: string;
        city?: string;
        state?: string;
        photo?: string;
        availableUnits?: string;
        wifi?: boolean;
        laundry?: boolean;
    }
}
