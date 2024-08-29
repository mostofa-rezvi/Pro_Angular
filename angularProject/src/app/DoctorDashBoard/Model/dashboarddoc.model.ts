
export class DashboardDocModel {
  doctorId!: number;
  name!: string; 
  totalAppointments!: number; 
  completedAppointments!: number; 
  pendingAppointments!: number; 
  averageRating!: number; 
  latestActivities!: ActivitiesDocModel[];
}

export class ActivitiesDocModel {
  id!: string;
  activityType!: string;
  description!: string;
  date!: string;
}

  