import * as SecureStore from 'expo-secure-store';
import { User } from './context';

const key = 'userKey';

const restoreUser = async () => {
  const user = await getToken();
  return user ? JSON.parse(user) : null;
};

const storeToken = async (authToken: User) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(authToken));
  } catch (err) {
    console.log('Error in saving token: ', err);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    console.log('Error in retrieving token: ', err);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.log('Error in removing token: ', err);
  }
};

export default { removeToken, getToken, storeToken, restoreUser };
