import { createFileRoute } from '@tanstack/react-router';
import Portfolio from './Portfolio';

export const Route = createFileRoute("/portfolio")({
  component:Portfolio
})


