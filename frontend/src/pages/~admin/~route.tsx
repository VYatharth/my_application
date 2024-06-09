import { createFileRoute } from '@tanstack/react-router';
import Admin from './Admin';


export const Route = createFileRoute('/admin')({
  component: Admin,
  beforeLoad: async () => {
    //   if (!isLoggedIn()) {
    //     throw redirect({
    //       to: "/login",
    //     })
    //   }
  },
});


