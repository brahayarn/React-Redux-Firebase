import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventForm from "../../features/events/form/EventForm";
import EventDetailedPage from "../../features/events/details/EventDetailedPage";
import Scratch from "../../features/scratch/Scratch";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/events", element: <EventDashboard />},
            {path: "/events/:id", element: <EventDetailedPage />},
            {path: "/manage/:id", element: <EventForm/>},
            {path: "/createEvent", element: <EventForm key={'create'}/>},
            {path: "/scratch", element: <Scratch />},


        ]
    }
])