import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../app/config/firebase';
import { setEvents } from '../eventSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default function EventDetailedPage() {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(e => e.id === id));
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const unsebscribe = onSnapshot(doc(db, 'events', id), {
      next: doc => {
        dispatch(setEvents({id: doc.id, ...doc.data()} as any))
        setLoading(false);
      },
      error: error => {
        console.log(error)
        toast.error(error.message)
        setLoading(false);
      }
    })
    return () => unsebscribe();
  }, [id, dispatch]);

  if (loading) return <LoadingComponent />;


  if (!event) return <h2>Event not found</h2>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}/>
        <EventDetailedInfo event={event}/>
        <EventDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar/>
        </Grid.Column>
    </Grid>
  )
}