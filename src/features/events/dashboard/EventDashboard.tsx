import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useAppSelector } from '../../../app/store/store';
import { useEffect } from 'react';
import { collection, query, onSnapshot, } from 'firebase/firestore';
import { db } from '../../../app/config/firebase';
import { AppEvent } from '../../../app/types/event';
import { useAppDispatch } from '../../../app/store/store';
import { setEvents } from '../eventSlice';




export default function EventDashboard() {
 const events = useAppSelector(state => state.events.events)
 const dispatch = useAppDispatch()

  useEffect(() => {
    const q = query(collection(db, 'events'))
    const unsubscribe = onSnapshot(q, {
      next: querySnapshot => {
        const evts:AppEvent[] = []
        querySnapshot.forEach(doc => {
          evts.push({id: doc.id, ...doc.data()} as AppEvent)
        })
        dispatch(setEvents(evts))
      },
      error: (err) => console.log(err),
      complete: () => console.log('done')
    })
    return () => unsubscribe()
  }, [dispatch])

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList
            events={events}
            />
        </Grid.Column>
        <Grid.Column width={6}>
            <h2>Filters</h2>
        </Grid.Column>
    </Grid>
  )
}