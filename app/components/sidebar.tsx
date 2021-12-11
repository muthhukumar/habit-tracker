import clsx from 'clsx'
import * as React from 'react'
import { Link, useLocation } from 'remix'

type Link = {
  to: string
  title: string
}

const links: Array<Link> = [
  {
    to: '/dashboard/today',
    title: 'Today',
  },
  {
    to: '/dashboard/habits',
    title: 'Habits',
  },
]

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  const { pathname } = useLocation()
  const isActiveLink = pathname === to
  return (
    <li>
      <Link
        to={to}
        className={clsx(
          'hover:bg-yellow-800 inline-block w-full p-2 mb-4 rounded-md no-underline',
          {
            'bg-yellow-600': isActiveLink,
          },
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Sidebar() {
  return (
    <header className="relative h-full w-[360px] text-white border-r border-gray-800">
      <h1 className="p-6 text-xl font-bold text-yellow-600">Habit tracker</h1>
      <nav className="p-4 mt-2">
        <ul>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <form
        className="absolute bottom-0 left-0 right-0 mt-auto border-t border-gray-800"
        action="/logout"
        method="post"
      >
        <button className="w-full p-2 mt-auto text-center">Logout</button>
      </form>
    </header>
  )
}
