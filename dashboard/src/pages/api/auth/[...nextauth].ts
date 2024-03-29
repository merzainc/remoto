import NextAuth from 'next-auth';

import { authOptions } from '@/helpers';

// @see ./lib/auth
export default NextAuth(authOptions);
