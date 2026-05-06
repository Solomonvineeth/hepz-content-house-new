import Head from 'next/head'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CMO',
    company: 'Sugar Cosmetics',
    text: 'Hepz Content House transformed our digital presence completely. Their content strategy helped us triple our Instagram engagement within 3 months. What sets them apart is their deep understanding of both the brand and the audience — they don\'t just create content, they create connection.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&q=80',
    metric: '3x Engagement',
  },
  {
    name: 'Rahul Verma',
    role: 'Founder',
    company: 'GlowUp Skincare',
    text: 'The team at Hepz truly understands brand storytelling. They elevated our brand from a local startup to a recognized name across India. Our new brand identity and content strategy gave us the confidence to scale — and the results followed immediately.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    metric: 'Grew 4x in 6 months',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Head of Marketing',
    company: 'Lenskart',
    text: 'Their creative vision and execution is unmatched. Every campaign they created for us felt authentic and drove real business results. They don\'t just deliver — they exceed expectations every single time.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    metric: '45% Conversion Lift',
  },
  {
    name: 'Vikram Patel',
    role: 'Co-Founder',
    company: 'Chai & Co.',
    text: 'Working with Hepz was one of the best decisions we made for our brand. They helped us grow from 0 to 100K followers in just 6 months, with content that our audience genuinely loved. The ROI speaks for itself.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    metric: '0 → 100K Followers',
  },
  {
    name: 'Deepa Nair',
    role: 'Brand Head',
    company: 'Zouk',
    text: 'Hepz brought a fresh perspective to our social media strategy. Their ability to understand our aesthetic and translate it into content that performs was impressive. We saw 80% growth in engagement within the first quarter.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80',
    metric: '80% Engagement Growth',
  },
  {
    name: 'Arun Subramanian',
    role: 'CEO',
    company: 'FreshMart',
    text: 'The video production quality from Hepz is cinematic. Our brand film got 1.5 million views organically and completely changed how people perceived us. Worth every rupee — and then some.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    metric: '1.5M Video Views',
  },
]

const logos = [
  'Sugar Cosmetics', 'GlowUp', 'Lenskart', 'Chai & Co.',
  'Zouk', 'FreshMart', 'Puma India', 'Mamaearth',
]

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonials — Hepz Content House</title>
        <meta name="description" content="What brands say about working with Hepz Content House — real results, real stories." />
      </Head>

      {/* Hero */}
      <section
        className="relative pt-44 pb-24 px-6 overflow-hidden"
        style={{ background: '#0A0A0A' }}
      >
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at right top, #D4A853 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag mb-8">Social Proof</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.1,
              maxWidth: '800px',
            }}
          >
            Words from brands
            <br />
            we&apos;ve <em className="grad-text">helped grow</em>
          </h1>
        </div>
      </section>

      {/* Brand Logos Marquee */}
      <div className="py-8 overflow-hidden" style={{ background: 'rgba(212,168,83,0.05)', borderTop: '1px solid rgba(212,168,83,0.1)', borderBottom: '1px solid rgba(212,168,83,0.1)' }}>
        <div className="marquee-inner">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: 'rgba(212,168,83,0.5)',
                marginRight: '60px',
                letterSpacing: '0.05em',
              }}
            >
              {logo} ✦
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px stagger" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal card-hover"
                style={{
                  background: '#0D0D0D',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Quote icon */}
                <Quote
                  size={40}
                  style={{
                    color: 'rgba(212,168,83,0.1)',
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                  }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={13} fill="#D4A853" color="#D4A853" />
                  ))}
                </div>

                {/* Metric badge */}
                <div
                  className="inline-block mb-5"
                  style={{
                    background: 'rgba(212,168,83,0.1)',
                    border: '1px solid rgba(212,168,83,0.2)',
                    padding: '4px 12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.65rem',
                      color: '#D4A853',
                      letterSpacing: '0.1em',
                    }}
                  >
                    ✦ {t.metric}
                  </span>
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'rgba(245,240,232,0.8)',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid rgba(212,168,83,0.3)',
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        color: '#F5F0E8',
                        fontSize: '0.95rem',
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        color: '#D4A853',
                        fontSize: '0.78rem',
                      }}
                    >
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#D4A853" color="#D4A853" />
            ))}
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '8px',
            }}
          >
            4.9 / 5
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem' }}>
            Average rating across 120+ projects and client reviews
          </p>
        </div>
      </section>
    </>
  )
}
