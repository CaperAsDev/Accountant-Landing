import { createLazyFileRoute } from '@tanstack/react-router';

function services() {
  return <div className="p-2">Hello from services!</div>;
}

export const Route = createLazyFileRoute('/services')({
  component: services,
});
