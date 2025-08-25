import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crew')({
  component: Crew,
})

function Crew() {
  return <div >Hello from About!</div>
}