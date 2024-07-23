import { Link, useNavigate } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";


type Props = {
  setAuth: (auth: boolean) => void;

}

export default function SignedInMenu({setAuth}: Props) {
  const navigate = useNavigate();

  function handleSignOut() {
    setAuth(false);
    navigate('/');
  }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png'/>
        <Dropdown pointing='top left' text='BIBI'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/createEvent' 
            text='Create Event' icon='plus'/>
            <Dropdown.Item to='/createEvent' 
            text='My  profile' icon='user'/>
            <Dropdown.Item to='/createEvent'
            onClick={handleSignOut} 
            text='Sign Out' icon='power'/>
          </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
  )
}