import { useDispatch, useSelector } from 'react-redux';
import { selectContactsCount } from 'redux/contacts/contactSelectors';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Wrapper, Username, Button } from './UserMenu.styled';


const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  const total = useSelector(selectContactsCount);

  return (
    <Wrapper>
      <Username>
        Welcome, {user.name}! : {total}
      </Username>

      <Button type="button" onClick={handleLogOut}>
        <LogoutIcon/>
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
