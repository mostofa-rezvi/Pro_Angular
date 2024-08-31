export class RecepAppointment {
    id!: string; 
    departments!: {
        id: string;
    };
    doctors!: {
        drid: string;
    };
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string; // ISO format date string
    appointmentTime!: string; // ISO format time string
}
