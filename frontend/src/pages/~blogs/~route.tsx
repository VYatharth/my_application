import { createFileRoute } from '@tanstack/react-router';
import Blogs from './Blogs';


export const Route = createFileRoute('/blogs')({
  component: Blogs,
  beforeLoad: async () => {
  },
});


