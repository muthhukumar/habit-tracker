import { MetaFunction, Outlet } from 'remix'
import Sidebar from '~/components/sidebar'

export const meta: MetaFunction = () => {
  return {
    title: 'Dashboard',
  }
}

export default function Dashboard() {
  return (
    <div className="h-screen text-white">
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full h-full overscroll-y-contain">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
