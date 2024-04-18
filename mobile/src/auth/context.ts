import React from 'react';

export interface User {
  force: string;
  id: string;
  phone?: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user?: User;
  setUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
