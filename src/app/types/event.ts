export type AppEvent = {
    id: string;
    title: string;
    date: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    hostPhotoURL: string;
    attendees: AppAttendee[];
}

export type AppAttendee = {
    id: string;
    name: string;
    photoURL: string;
}