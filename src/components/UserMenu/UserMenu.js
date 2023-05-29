import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import authSelectors from 'redux/auth/selectors';
import { Wrapper, OutBtn, Username } from '../Phonebook.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <Wrapper>
      <p>Welcome,</p>
      <Username>{name}</Username>
      <OutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </OutBtn>
    </Wrapper>
  );
};
