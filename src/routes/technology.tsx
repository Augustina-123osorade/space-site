import TechnologyPage from '@/pages/Technology'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/technology')({
  component: Technology,
})

function Technology() {
  return (
    <div>
        <TechnologyPage />
    </div>
  )
}
