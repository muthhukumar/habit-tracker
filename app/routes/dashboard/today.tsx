import { Link, Outlet } from 'remix'

export default function Today() {
  return (
    <div className="w-full">
      <Outlet />
      <Link to="new">Add new habit</Link>
    </div>
  )
}
