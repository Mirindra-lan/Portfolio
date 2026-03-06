"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import BorderBottom from "./borderBottom"
import Image from "next/image"
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#about", label: "About me" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contacts", label: "Contacts" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 p-4 bg-transparent z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="ml-6 rounded-full shadow-[0_0_10px_rgb(34,211,238)] hover:scale-110 transition-transform">
          <Link href="/">
            <Image src="/images/icon.png" alt="logo" width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 mr-28">
          {links.map((link) => (
            <div key={link.href} className="relative">
              <a
                href={link.href}
                className={`px-4 py-3 transition-colors ${
                  pathname === link.href ? "text-cyan-400" : "text-white"
                }`}
              >
                {link.label}
              </a>
              {pathname === link.href && (
                <div className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden mr-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Simple hamburger icon */}
            <FaIcon icon={isOpen ? faX : faBars} className="text-2xl text-gray-200 hover:scale-130"/>
          </button>
        </div>
      </div>
      <BorderBottom color={true}/>

      {/* Drawer Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[rgba(0,0,0,0.8)] flex flex-col items-center py-4 gap-4 z-40">
          {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`px-4 py-2 text-lg transition-colors ${
              pathname === link.href ? "text-cyan-400" : "text-white"
              }`}
              >
              {link.label}
            </Link>
            ))}
        </div>
      )}

    </nav>
  )
}