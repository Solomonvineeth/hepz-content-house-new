import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [router.pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[9990] transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(13,13,13,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,168,83,0.15)' : 'none',
          padding: scrolled ? '16px 0' : '28px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: '#F5F0E8',
                lineHeight: 1,
              }}
            >
              Hepz
            </span>
            <span
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.55rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#D4A853',
                marginTop: '2px',
              }}
            >
              Content House
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${router.pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-xs">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ cursor: 'none' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-[9980] lg:hidden transition-all duration-500"
        style={{
          background: 'rgba(13,13,13,0.98)',
          backdropFilter: 'blur(30px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: router.pathname === link.href ? '#D4A853' : '#F5F0E8',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4">
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  )
}
