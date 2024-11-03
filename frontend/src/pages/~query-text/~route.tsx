import { createFileRoute } from '@tanstack/react-router';
import QueryText from './QueryText';


export const Route = createFileRoute('/query-text')({
  component: QueryText,
  beforeLoad: async () => {
  },
});


