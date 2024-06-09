import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/health")({
  component: HealthComponent
})

function HealthComponent() {
  return <div>Health</div>
}