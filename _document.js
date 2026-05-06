import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const services = [
  {
    no: '01',
    title: 'Brand Strategy',
    tagline: 'Know who you are. Own who you are.',
    desc: 'Before any content is created, your brand needs a strategic foundation. We work with you to define your brand positioning, voice, target audience, and competitive advantage — then turn it into a playbook your entire team can follow.',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=700&q=80',
    deliverables: ['Brand Audit', 'Positioning Framework', 'Brand Voice Guide', 'Competitor Analysis', 'Audience Personas', 'Brand Messaging Pillars'],
  },
  {
    no: '02',
    title: 'Content Creation',
    tagline: 'Content that stops the scroll.',
    desc: 'From Instagram Reels to long-form blog posts, we create content that is visually stunning, on-brand, and strategically designed to engage and convert. No filler — every piece of content has a purpose.',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
    deliverables: ['Instagram Reels & Stories', 'Photography Direction', 'Blog & Article Writing', 'Email Newsletters', 'LinkedIn Content', 'YouTube Scripts'],
  },
  {
    no: '03',
    title: 'Social Media Marketing',
    tagline: 'Build community, not just followers.',
    desc: 'We craft and execute comprehensive social media strategies that build real, engaged communities around your brand. Paid or organic — we know what moves the needle on each platform.',
    img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=700&q=80',
    deliverables: ['Platform Strategy', 'Content Calendars', 'Paid Ad Management', 'Community Management', 'Monthly Analytics', 'A/B Testing'],
  },
  {
    no: '04',
    title: 'Video Production',
    tagline: 'Cinematic stories. Real results.',
    desc: 'Video is the most powerful medium for brand storytelling. From concept to final cut, we produce brand films, product videos, testimonial reels, and documentary-style content that leaves a lasting impression.',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&q=80',
    deliverables: ['Brand Films', 'Product Videos', 'Testimonial Videos', 'Reels & Shorts', 'Motion Graphics', 'Event Videography'],
  },
  {
    no: '05',
    title: 'Influencer Marketing',
    tagline: 'The right voice for the right audience.',
    desc: 'We connect your brand with carefully vetted influencers — from micro to mega — who align with your values and speak directly to your target audience. Every collaboration is tracked, measured, and optimised.',
    img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=700&q=80',
    deliverables: ['Influencer Research & Vetting', 'Campaign Strategy', 'Contract & Negotiation', 'Brief Creation', 'Content Review', 'Performance Reporting'],
  },
  {
    no: '06',
    title: 'Brand Identity Design',
    tagline: 'Look unforgettable.',
    desc: 'Your visual identity is often the first impression people have of your brand. We craft complete visual systems — logos, color palettes, typography and brand guidelines — that make your brand instantly recognisable.',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80',
    deliverables: ['Logo Design', 'Color System', 'Typography System', 'Brand Guidelines', 'Business Collateral', 'Social Media Templates'],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Hepz Content House</title>
        <meta name="description" content="Full-service brand marketing — strategy, content, social media, video, influencer marketing and brand identity design." />
      </Head>

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: '#0A0A0A' }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at right, #D4A853 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag mb-8">What We Offer</p>
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
            Services built for brands that{' '}
            <em className="grad-text">mean business.</em>
          </h1>
        </div>
      </section>

      {/* Services List */}
      {services.map((s, i) => (
        <section
          key={i}
          className="py-24 px-6"
          style={{ background: i % 2 === 0 ? '#0D0D0D' : '#0A0A0A' }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 0 ? '' : 'lg:order-2'}>
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.7rem',
                  color: '#D4A853',
                  letterSpacing: '0.2em',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {s.no}
              </span>
              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  marginBottom: '8px',
                }}
              >
                {s.title}
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  color: '#D4A853',
                  marginBottom: '20px',
                }}
              >
                {s.tagline}
              </p>
              <p
                className="reveal"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: 'rgba(245,240,232,0.6)',
                  lineHeight: 1.9,
                  marginBottom: '28px',
                }}
              >
                {s.desc}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8 reveal">
                {s.deliverables.map((d, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check size={13} style={{ color: '#D4A853', flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.85rem',
                        color: 'rgba(245,240,232,0.65)',
                      }}
                    >
                      {d}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary reveal">
                Enquire About This <ArrowRight size={16} />
              </Link>
            </div>
            <div className={`reveal-${i % 2 === 0 ? 'right' : 'left'} ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
              <div className="img-container" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.8) contrast(1.1)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a0f00, #0D0D0D)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #D4A853 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="section-tag justify-center mb-6 reveal">Ready to Begin?</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s build something <em className="grad-text">extraordinary</em>
          </h2>
          <p className="reveal" style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.6)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Every engagement starts with a free 30-minute strategy call. No commitments, no pressure — just a real conversation about your brand.
          </p>
          <Link href="/contact" className="btn-primary reveal">
            Book a Free Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
