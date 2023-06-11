import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <IconButton onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </IconButton>
    </Wrapper>
  );
};

export default UserMenu;
