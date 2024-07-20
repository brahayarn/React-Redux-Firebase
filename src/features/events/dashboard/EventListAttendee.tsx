import { List, Image } from 'semantic-ui-react';
import { AppAttendee } from '../../../app/types/event';
type Props = {
  attendee: AppAttendee
}


export default function EventListAttendee({attendee}: Props ) { 
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL}/>
    </List.Item>
  )
}