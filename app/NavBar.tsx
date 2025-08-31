'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsBugFill } from "react-icons/bs";
import classnames from 'classnames';


const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {label: "DashBoard", href: '/'},
    {label: "Issues", href: '/issues'}
  ]

  return (
    <nav className='flex space-x-6 border-b mb-10 px-5 h-14 items-center'>
        <Link href="/"><BsBugFill /></Link>
        <ul className='flex space-x-6'>
            {links.map((link) => (
                <Link key={link.href}
                    href={link.href}
                    className={classnames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })}>
                    {link.label}
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar
