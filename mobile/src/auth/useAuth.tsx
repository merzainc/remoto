import db from '@/config/firebase';
import { doc, GeoPoint, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import AuthContext, { User } from './context';
import authStorage from './storage';

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: User) => {
    setUser(authToken);
    authStorage.storeToken(authToken);
    const positionsRef = doc(db, 'positions', user?.force as string);
    updateDoc(positionsRef, {
      name: authToken.name,
      location: new GeoPoint(0, 0),
      battery: {
        status: 'UNKNOWN',
        level: 'UNKNOWN',
      },
      signedIn: true,
    })
      .then((res) => {
        console.log('Started shift!');
      })
      .catch((err) => console.error(err));
  };

  //   Note:@ralph - add type information here
  const logOut = () => {
    const positionsRef = doc(db, 'positions', user?.force as string);
    updateDoc(positionsRef, {
      name: user?.name,
      location: new GeoPoint(0, 0),
      battery: {
        status: 'UNKNOWN',
        level: 'UNKNOWN',
      },
      signedIn: false,
    })
      .then((res) => {
        console.log('Ended shift!');
      })
      .catch((err) => console.error(err));
    //@ts-ignore
    setUser(null);
    authStorage.removeToken();
  };

  return { user, setUser, logOut, logIn };
}
