import { LoaderFunction, MetaFunction, redirect } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const loader: LoaderFunction = () => {
  return redirect('/dashboard/today')
}
