import { createFileRoute } from '@tanstack/react-router';
import QuestionDoc from './QuestionDoc';


export const Route = createFileRoute('/question-doc')({
  component: QuestionDoc,
  beforeLoad: async () => {
  },
});


