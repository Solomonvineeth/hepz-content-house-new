import Link from 'next/link'
import { Instagram, Linkedin, Youtube, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(212,168,83,0.1)' }}>
      {/* CTA Strip */}
      <div
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f00, #0D0D0D)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #D4A853 0%, transparent 70%)',
          }}
        />
        <p className="section-tag justify-center mb-6 reveal">Start Your Journey</p>
        <h2
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#F5F0E8',
            marginBottom: '2rem',
          }}
        >
          Ready to build your{' '}
          <em className="grad-text">brand story?</em>
        </h2>
        <Link href="/contact" className="btn-primary reveal">
          Get In Touch <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 600,
                color: '#F5F0E8',
                marginBottom: '4px',
              }}
            >
              Hepz
            </h3>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#D4A853',
                marginBottom: '20px',
              }}
            >
              Content House
            </p>
            <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Crafting compelling narratives and bold brand identities that connect, inspire, and convert.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Youtube, href: 'https://youtube.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  style={{
                    width: '38px',
                    height: '38px',
                    border: '1px solid rgba(212,168,83,0.3)',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#D4A853'
                    e.currentTarget.style.color = '#D4A853'
                    e.currentTarget.style.background = 'rgba(212,168,83,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(212,168,83,0.3)'
                    e.currentTarget.style.color = 'rgba(245,240,232,0.6)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="section-tag mb-6" style={{ fontSize: '0.65rem' }}>Services</p>
            {[
              'Brand Strategy',
              'Content Creation',
              'Social Media Marketing',
              'Video Production',
              'Copywriting',
              'Influencer Marketing',
              'Brand Identity Design',
            ].map(s => (
              <Link
                key={s}
                href="/services"
                className="block mb-3"
                style={{
                  color: 'rgba(245,240,232,0.5)',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Outfit, sans-serif',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4A853'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.5)'}
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Pages */}
          <div>
            <p className="section-tag mb-6" style={{ fontSize: '0.65rem' }}>Pages</p>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Testimonials', href: '/testimonials' },
              { label: 'Careers', href: '/careers' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block mb-3"
                style={{
                  color: 'rgba(245,240,232,0.5)',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Outfit, sans-serif',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4A853'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.5)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="section-tag mb-6" style={{ fontSize: '0.65rem' }}>Contact</p>
            {[
              { Icon: Mail, text: 'hello@hepzcontenthouse.com' },
              { Icon: Phone, text: '+91 98765 43210' },
              { Icon: MapPin, text: 'Chennai, Tamil Nadu, India' },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 mb-5">
                <Icon size={15} style={{ color: '#D4A853', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 mt-12"
          style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }}
        >
          <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
            © 2025 Hepz Content House. All rights reserved.
          </p>
          <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
            Crafted with passion in Chennai, India
          </p>
        </div>
      </div>
    </footer>
  )
}
