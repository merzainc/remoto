import http from './http';
const login = (guard: any) => http.post('/login', guard);

export default {
  login,
};
