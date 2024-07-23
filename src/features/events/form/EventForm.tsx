import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';




export default function EventForm() {
    const initialValues =  {
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
        console.log(values);
        // selectedEvent ? updateEvent({...selectedEvent, ...values}) 
        // : addEvent({...values, id: createId, hostedBy: 'Bob', hostPhotoURL: '', attendees: []});
        // setFormOpen(false);
    }
  return (
    <Segment clearing>
       <Header content={'Create Event'}/> 
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