import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutButtons from './SignedOutButtons';
import { useAppSelector } from '../../store/store';
import { sampleData } from '../../api/Data';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';




export default function Navbar() {
 const {authenticated} = useAppSelector(state => state.auth);

 function seedData(){
  sampleData.forEach(
    async (event) => {
      const {id, ...rest} = event
      await setDoc(doc(db, 'events', id), {
        ...rest
      })
  
 })
 }
  return (
    <Menu inverted={true} fixed='top'>
        <Container>
            <MenuItem header as={NavLink} to='/'>
                <img src="logo.png" alt="logo"  />
                Re-vents
            </MenuItem>
            <MenuItem name='Events' as={NavLink} to='/events'/>
            <MenuItem name='Scratch' as={NavLink} to='/scratch'/>

            <MenuItem>
              <Button 
              as={NavLink} 
              to='/createEvent'
              positive={true} 
              floated='right' 
              inverted={true}
              content='Create Event'
              />
            </MenuItem>
            {import.meta.env.DEV && (
              <MenuItem>
              <Button
              inverted={true}
              color='teal'
              content='Seed Data'
              onClick={seedData}
              />
              </MenuItem>
            )}
            {authenticated ?  <SignedInMenu /> : <SignedOutButtons />}
        </Container>
    </Menu>
  )
}