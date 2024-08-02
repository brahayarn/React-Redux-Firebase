export type AppEvent = {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    hostPhotoURL: string;
    isCancelled: boolean;
    attendees: AppAttendee[]; 
}
{/* attendees?: AppAttendee[];* була помилка в eventlistitem*/}
export type AppAttendee = {
    id: string;
    name: string
    photoURL: string;
}