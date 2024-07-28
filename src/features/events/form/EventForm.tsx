import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';
import { useAppDispatch } from '../../../app/store/store';
import { createEvent, updateEvent } from '../eventSlice';
import { useNavigate } from 'react-router-dom';
import { createId } from '@paralleldrive/cuid2';



export default function EventForm() {
  let {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(e => e.id === id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


    const initialValues = event ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }
    const [values, setValues] = useState(initialValues);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }
    function handleFormSubmit() {
        id = id ?? createId();
        event 
         ? dispatch(updateEvent({...event, ...values})) 
         : dispatch(createEvent({...values, id, hostedBy: 'Bob', hostPhotoURL: '', attendees: []}));
            navigate(`/events/${id}`);
    }
  return (
    <Segment clearing>
       <Header content={event ? 'Update event' : 'Create Event'}/> 
       <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <input type="text" 
                placeholder="Event Title"
                 value={values.title}
                 name='title'
                 onChange={(e) => handleInputChange(e)}
                 />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Category"
                value={values.category}
                name='category'
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Description"
                value={values.description}
                name='description'
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="City"
                value={values.city}
                name='city'
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="text" placeholder="Venue"
                value={values.venue}
                name='venue'
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Form.Field>
                <input type="date" placeholder="Date"
                value={values.date}
                name='date'
                onChange={(e) => handleInputChange(e)}
                />
            </Form.Field>
            <Button type='submit' floated='right' positive text='Submit'/>
            <Button as={Link} to='/events' type='submit' floated='right' text='Cancel'/>
       </Form>
    </Segment>
  )
}