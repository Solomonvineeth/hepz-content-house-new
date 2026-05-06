import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react'

const openings = [
  {
    title: 'Senior Content Strategist',
    type: 'Full-Time',
    location: 'Chennai / Remote',
    dept: 'Strategy',
    desc: 'We\'re looking for a seasoned content strategist who can lead brand storytelling frameworks, manage content calendars, and drive measurable results for our clients across industries.',
    requirements: [
      '4+ years in content strategy or brand marketing',
      'Strong portfolio of brand storytelling work',
      'Proficiency in analytics tools (GA4, Meta Insights)',
      'Excellent written communication skills',
    ],
  },
  {
    title: 'Social Media Manager',
    type: 'Full-Time',
    location: 'Chennai',
    dept: 'Social',
    desc: 'We need a social-native individual who breathes Instagram and LinkedIn, understands trends before they happen, and can translate brand identity into engaging daily content.',
    requirements: [
      '2+ years managing brand social media accounts',
      'Deep knowledge of Instagram, LinkedIn, and YouTube algorithms',
      'Experience with Canva, CapCut, and scheduling tools',
      'Understanding of paid social advertising',
    ],
  },
  {
    title: 'Videographer & Editor',
    type: 'Full-Time',
    location: 'Chennai',
    dept: 'Production',
    desc: 'A creative cinematographer who can shoot, direct, and edit brand content from concept to final delivery. Must have experience with reels, product shoots and brand films.',
    requirements: [
      'Proficiency with Sony/Canon cameras',
      'Expert in Adobe Premiere & After Effects',
      'Strong portfolio of brand video work',
      'Ability to conceptualise and storyboard',
    ],
  },
  {
    title: 'Copywriter',
    type: 'Full-Time / Freelance',
    location: 'Remote',
    dept: 'Content',
    desc: 'Words are your superpower. We\'re looking for a witty, persuasive writer who can craft everything from punchy ad copy to long-form brand narratives — and make it all sound effortlessly on-brand.',
    requirements: [
      '2+ years of brand copywriting experience',
      'Versatile writing style — minimal to verbose',
      'SEO copywriting knowledge is a plus',
      'Portfolio showcasing range and adaptability',
    ],
  },
  {
    title: 'Business Development Executive',
    type: 'Full-Time',
    location: 'Chennai',
    dept: 'Growth',
    desc: 'Drive new business by identifying prospects, building relationships, and converting leads into long-term clients. You\'ll be the first impression Hepz makes on potential brand partners.',
    requirements: [
      '2+ years in sales or business development',
      'Experience in a creative agency or marketing company',
      'Excellent presentation and negotiation skills',
      'Strong network in the startup/brand ecosystem',
    ],
  },
]

const perks = [
  { icon: '🎨', title: 'Creative Freedom', desc: 'Pitch your own ideas. We love bold thinking and reward initiative.' },
  { icon: '🌍', title: 'Flexible Work', desc: 'Hybrid/remote options available. We trust our team to deliver.' },
  { icon: '📚', title: 'Learning Budget', desc: '₹15,000 annual budget for courses, books, and conferences.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-competitive salaries plus performance bonuses.' },
  { icon: '🚀', title: 'Fast Growth', desc: 'Small team = massive ownership. Grow fast with the company.' },
  { icon: '🎉', title: 'Team Culture', desc: 'We celebrate wins big and small. Monthly team outings and events.' },
]

export default function Careers() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Head>
        <title>Careers — Hepz Content House</title>
        <meta name="description" content="Join the Hepz Content House team. Open positions in content, strategy, video, social media and more." />
      </Head>

      {/* Hero */}
      <section
        className="relative pt-44 pb-24 px-6 overflow-hidden"
        style={{ background: '#0A0A0A' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, #8A9E85 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag mb-8">Join the Team</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
              maxWidth: '800px',
            }}
          >
            Build the future of
            <br />
            <em className="grad-text">brand marketing</em>
            <br />
            with us.
          </h1>
          <p
            style={{
              fontFamily: 'Outfit, sans-serif',
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '500px',
              marginTop: '1.5rem',
            }}
          >
            We&apos;re a small but mighty team of storytellers, strategists, and creatives on a mission to redefine brand marketing in India.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-tag mb-8 reveal">Why Hepz</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '3rem',
            }}
          >
            Life at <em className="grad-text">Hepz</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {perks.map((p, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '32px',
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '14px' }}>{p.icon}</span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#F5F0E8',
                    marginBottom: '8px',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-tag mb-8 reveal">Open Positions</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '3rem',
            }}
          >
            Current <em className="grad-text">openings</em>
          </h2>

          <div className="space-y-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {openings.map((job, i) => (
              <div
                key={i}
                className="reveal"
                style={{ background: '#0D0D0D' }}
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  style={{ cursor: 'none' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h3
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.4rem',
                        fontWeight: 500,
                        color: '#F5F0E8',
                      }}
                    >
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#D4A853',
                          border: '1px solid rgba(212,168,83,0.3)',
                          padding: '3px 10px',
                        }}
                      >
                        {job.dept}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(245,240,232,0.5)',
                          border: '1px solid rgba(245,240,232,0.1)',
                          padding: '3px 10px',
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                    <div className="hidden md:flex items-center gap-1" style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8rem', fontFamily: 'Outfit, sans-serif' }}>
                      <MapPin size={12} />
                      {job.location}
                    </div>
                    {expanded === i
                      ? <ChevronUp size={18} style={{ color: '#D4A853' }} />
                      : <ChevronDown size={18} style={{ color: 'rgba(245,240,232,0.5)' }} />
                    }
                  </div>
                </button>

                {expanded === i && (
                  <div style={{ padding: '0 24px 28px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ paddingTop: '20px' }}>
                      <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.95rem' }}>
                        {job.desc}
                      </p>
                      <p style={{ fontFamily: 'Outfit, sans-serif', color: '#D4A853', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Requirements
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                        {job.requirements.map((r, j) => (
                          <li key={j} style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: '#D4A853' }}>—</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:careers@hepzcontenthouse.com?subject=Application: ${job.title}`}
                        className="btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        Apply Now <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 text-center reveal"
            style={{ border: '1px solid rgba(212,168,83,0.2)', background: 'rgba(212,168,83,0.03)' }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontStyle: 'italic',
                color: '#F5F0E8',
                marginBottom: '12px',
              }}
            >
              Don&apos;t see a role that fits?
            </p>
            <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem', marginBottom: '20px' }}>
              We&apos;re always on the lookout for talented people. Send us your work.
            </p>
            <a href="mailto:careers@hepzcontenthouse.com" className="btn-outline">
              Send an Open Application
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
