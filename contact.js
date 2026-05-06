import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const team = [
  {
    name: 'Hephzibah E.',
    role: 'Founder & Creative Director',
    bio: 'A storyteller at heart, Hephzibah founded the agency with a vision to help Indian brands find their authentic voice.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    name: 'Arjun Menon',
    role: 'Head of Strategy',
    bio: 'With 8+ years in digital marketing, Arjun turns complex brand challenges into clear, winning strategies.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Kavya Nair',
    role: 'Lead Content Creator',
    bio: 'From reels to long-form content, Kavya creates content that stops the scroll and starts conversations.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Siddharth Rao',
    role: 'Video Production Lead',
    bio: 'Cinematic storytelling is Sid\'s craft. He turns brand visions into breathtaking visual narratives.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
]

const values = [
  { title: 'Authenticity', desc: 'We believe every brand has a genuine story. Our job is to find it and tell it without compromise.' },
  { title: 'Bold Creativity', desc: 'Safe is forgettable. We push creative boundaries to create marketing that actually moves people.' },
  { title: 'Results-First', desc: 'Beautiful work that delivers no results is failure. Everything we create is engineered to perform.' },
  { title: 'Partnership', desc: 'We don\'t have clients — we have partners. Your success is our success, always.' },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Hepz Content House</title>
        <meta name="description" content="The story behind Hepz Content House — Chennai's bold brand marketing agency." />
      </Head>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-end pb-20 overflow-hidden"
        style={{ paddingTop: '120px' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
            alt="Team"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0D0D0D 40%, transparent 80%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-tag mb-8">Our Story</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
            }}
          >
            Built on <em className="grad-text">passion,</em>
            <br />
            driven by purpose.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="section-tag mb-8 reveal">Our Mission</p>
            <h2
              className="reveal"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: '#F5F0E8',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              To transform brands into movements through the power of story
            </h2>
            <p className="reveal" style={{ color: 'rgba(245,240,232,0.6)', lineHeight: 1.9, fontFamily: 'Outfit, sans-serif', marginBottom: '1rem' }}>
              Hepz Content House was founded in Chennai with a simple belief: every brand — no matter its size — deserves marketing that is bold, honest, and built to last.
            </p>
            <p className="reveal" style={{ color: 'rgba(245,240,232,0.6)', lineHeight: 1.9, fontFamily: 'Outfit, sans-serif', marginBottom: '2rem' }}>
              We started as a one-person content operation and grew into a full-service agency because our clients kept coming back — and bringing their friends. That word-of-mouth growth is the result of one thing: we care deeply about the work.
            </p>
            <Link href="/contact" className="btn-primary reveal">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative reveal-right">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
              alt="Agency"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                border: '1px solid #D4A853',
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-tag mb-8 reveal">What Drives Us</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '4rem',
            }}
          >
            Our core <em className="grad-text">values</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px stagger" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="reveal"
                style={{ background: '#0A0A0A', padding: '48px' }}
              >
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.65rem',
                    color: '#D4A853',
                    letterSpacing: '0.2em',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: '#F5F0E8',
                    marginBottom: '12px',
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-tag mb-8 reveal">The Faces Behind the Work</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '4rem',
            }}
          >
            Meet the <em className="grad-text">team</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {team.map((member, i) => (
              <div key={i} className="reveal card-hover group">
                <div className="img-container" style={{ aspectRatio: '3/4', marginBottom: '20px', overflow: 'hidden' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: '#F5F0E8',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: '#D4A853', fontSize: '0.8rem', marginBottom: '12px', letterSpacing: '0.05em' }}>
                  {member.role}
                </p>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
