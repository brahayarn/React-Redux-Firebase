import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { ChangeEvent, useState } from 'react';
import { createId } from '@paralleldrive/cuid2';
import { AppEvent } from '../../../app/types/event';

type Props = {
    setFormOpen: (value: boolean) => void;
    addEvent: (event: any) => void;
    selectedEvent: AppEvent | null;

}

export default function EventForm({setFormOpen, addEvent, selectedEvent}: Props) {
    const initialValues = selectedEvent ?? {
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
        addEvent({...values, id: createId, hostedBy: 'Bob', hostPhotoURL: '', attendees: []});
        setFormOpen(false);
    }
  return (
    <Segment clearing>
       <Header content="Event Title"/> 
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
            <Button type='submit' floated='right' positive t='Submit'/>
            <Button 
            onClick={() => setFormOpen(false)}
            type='submit' floated='right' t='Cancel'/>
       </Form>
    </Segment>
  )
}