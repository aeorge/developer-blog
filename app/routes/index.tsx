import type { MetaFunction, LoaderFunction } from 'remix'
import { json } from 'remix'

export const loader: LoaderFunction = () => {
  const data = {}

  return json(data)
}

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!'
  }
}

export default function Index() {
  return (
    <div className='remix__page'>
      <main></main>
    </div>
  )
}
