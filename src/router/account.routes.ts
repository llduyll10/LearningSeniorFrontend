import { Layout, Register } from '@/views/account';
export default {
  path: '/account',
  component: Layout,
  children: [
    { path: '', redirect: Register },
    { path: 'register', component: Register }
],
};
