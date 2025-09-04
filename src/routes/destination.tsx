import DestinationPage from '@/pages/Destination'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/destination')({
  component: Destination,
})

function Destination() {
  return (
    <div>
      <DestinationPage />
    </div>
  )
}
