import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination')({
  component: Destination,
})

function Destination() {
  return <div>Hello "/destination"!</div>
}
