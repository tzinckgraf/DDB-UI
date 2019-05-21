export interface Schedule {
    id: string,
    schedule: {
        rrule: string,
        startTime: string,
        endTime: string
    },
    serviceId: string
}