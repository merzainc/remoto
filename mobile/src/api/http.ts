import { create } from 'apisauce';

const http = create({
  baseURL: 'https://remoto-alpha.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
