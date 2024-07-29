import { Link, useNavigate } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { useAppSelector } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import { SignOut } from "../../../features/auth/authSlice";


export default function SignedInMenu() {
  const {currentUser} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSignOut() {
    dispatch(SignOut());
    navigate('/');
  }
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png'/>
        <Dropdown pointing='top left' text={currentUser?.email}>
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