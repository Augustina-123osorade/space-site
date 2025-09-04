import { createFileRoute } from '@tanstack/react-router'
import CrewPage from '@/pages/Crew'

export const Route = createFileRoute('/crew')({
  component: Crew,
})

function Crew() {
  return (
    <div>
        <CrewPage />
    </div>
  )
}