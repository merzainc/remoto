import { useContext } from 'react';
import AuthContext, { User } from './context';
import authStorage from './storage';

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: User) => {
    setUser(authToken);
    authStorage.storeToken(authToken);
  };

  //   Note:@ralph - add type information here
  const logOut = () => {
    //@ts-ignore
    setUser(null);
    authStorage.removeToken();
  };

  return { user, setUser, logOut, logIn };
}
