import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Play, Star, ChevronDown } from 'lucide-react'

const services = [
  {
    no: '01',
    title: 'Brand Strategy',
    desc: 'We craft comprehensive brand strategies that define your voice, position your business, and drive long-term growth.',
    tags: ['Research', 'Positioning', 'Identity'],
  },
  {
    no: '02',
    title: 'Content Creation',
    desc: 'From reels to blogs — compelling, scroll-stopping content tailored to your brand and audience.',
    tags: ['Reels', 'Photography', 'Copywriting'],
  },
  {
    no: '03',
    title: 'Social Media Marketing',
    desc: 'Data-driven social strategies that build communities, boost engagement and convert followers to customers.',
    tags: ['Strategy', 'Ads', 'Analytics'],
  },
  {
    no: '04',
    title: 'Video Production',
    desc: 'Cinematic brand films, product videos and documentary-style storytelling that leaves an impression.',
    tags: ['Filming', 'Editing', 'Motion Graphics'],
  },
  {
    no: '05',
    title: 'Influencer Marketing',
    desc: 'Connecting your brand with the right voices. Authentic collaborations that build trust and drive results.',
    tags: ['Sourcing', 'Campaigns', 'Reporting'],
  },
  {
    no: '06',
    title: 'Brand Identity Design',
    desc: 'Logos, typography, color systems — complete visual identities that make your brand unforgettable.',
    tags: ['Logo', 'Typography', 'Guidelines'],
  },
]

const brands = [
  'Zomato', 'Nykaa', 'Puma India', 'Sugar Cosmetics',
  'Myntra', 'Boat', 'Mamaearth', 'Ola', 'Meesho', 'Lenskart',
  'Zomato', 'Nykaa', 'Puma India', 'Sugar Cosmetics',
  'Myntra', 'Boat', 'Mamaearth', 'Ola', 'Meesho', 'Lenskart',
]

const stats = [
  { number: '120+', label: 'Brands Served' },
  { number: '500+', label: 'Campaigns Delivered' },
  { number: '4.2M+', label: 'Reach Generated' },
  { number: '98%', label: 'Client Retention' },
]

const portfolioItems = [
  {
    title: 'Sugar Cosmetics',
    category: 'Brand Strategy + Social',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    color: '#E8C4A0',
  },
  {
    title: 'Puma India',
    category: 'Video Production',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    color: '#C4622D',
  },
  {
    title: 'Mamaearth',
    category: 'Content Creation',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    color: '#8A9E85',
  },
  {
    title: 'Boat Audio',
    category: 'Influencer Campaign',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    color: '#D4A853',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CMO, Sugar Cosmetics',
    text: 'Hepz Content House transformed our digital presence completely. Their content strategy helped us triple our Instagram engagement within 3 months.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
  },
  {
    name: 'Rahul Verma',
    role: 'Founder, GlowUp Skincare',
    text: 'The team at Hepz truly understands brand storytelling. They elevated our brand from a local startup to a recognized name across India.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Head of Marketing, Lenskart',
    text: 'Their creative vision and execution is unmatched. Every campaign they created for us felt authentic and drove real business results.',
    stars: 5,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Parallax on hero
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Hepz Content House — Brand Marketing Agency</title>
        <meta name="description" content="Chennai's premier brand marketing and content agency. We craft stories that connect, inspire, and convert." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{ paddingBottom: '8vh' }}
      >
        {/* BG image */}
        <div ref={heroRef} className="absolute inset-0" style={{ top: '-20%', height: '140%' }}>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
            alt="hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.35)',
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #0D0D0D 30%, rgba(13,13,13,0.4) 70%, rgba(13,13,13,0.6) 100%)',
            }}
          />
        </div>

        {/* Gold grain overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: 'radial-gradient(ellipse at 30% 70%, #D4A853 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl">
            <div className="section-tag mb-8" style={{ animationDelay: '0.2s' }}>
              Chennai&apos;s Bold Brand Agency
            </div>

            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
                fontWeight: 300,
                lineHeight: 1,
                color: '#F5F0E8',
                marginBottom: '0.5rem',
              }}
            >
              We tell your
            </h1>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
                fontWeight: 600,
                lineHeight: 1,
                fontStyle: 'italic',
                marginBottom: '2rem',
              }}
              className="grad-text"
            >
              brand story.
            </h1>

            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: 'rgba(245,240,232,0.65)',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight: 1.8,
                maxWidth: '550px',
                marginBottom: '2.5rem',
              }}
            >
              Hepz Content House is a full-service brand marketing agency crafting
              bold narratives, striking visuals, and campaigns that convert — for brands
              ready to be remembered.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn-primary">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20"
            style={{ background: 'rgba(212,168,83,0.15)' }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-6 px-4"
                style={{ background: 'rgba(13,13,13,0.9)' }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 600,
                    color: '#D4A853',
                  }}
                >
                  {s.number}
                </span>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                    marginTop: '4px',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2"
          style={{ transform: 'translateX(-50%)', animation: 'float 2s ease-in-out infinite' }}
        >
          <ChevronDown size={22} style={{ color: 'rgba(212,168,83,0.6)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="py-5 marquee-wrapper"
        style={{ background: '#D4A853', overflow: 'hidden' }}
      >
        <div className="marquee-inner">
          {brands.map((b, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0D0D0D',
                marginRight: '60px',
              }}
            >
              {b} ✦
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT INTRO ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-tag mb-8 reveal">Who We Are</p>
              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: '#F5F0E8',
                  marginBottom: '1.5rem',
                }}
              >
                A team of{' '}
                <em style={{ color: '#D4A853', fontStyle: 'italic' }}>storytellers,</em>{' '}
                <br />
                strategists &amp; creators
              </h2>
              <p
                className="reveal"
                style={{
                  color: 'rgba(245,240,232,0.6)',
                  lineHeight: 1.9,
                  marginBottom: '1.2rem',
                  fontSize: '1rem',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                Founded by Hephzibah, Hepz Content House was born from a passion for 
                authentic storytelling and a belief that every brand has a story worth telling —
                beautifully, boldly, and brilliantly.
              </p>
              <p
                className="reveal"
                style={{
                  color: 'rgba(245,240,232,0.6)',
                  lineHeight: 1.9,
                  marginBottom: '2.5rem',
                  fontSize: '1rem',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                Based in Chennai, we work with startups, established brands and personal 
                brands across India to create marketing that doesn&apos;t just look good — it works.
              </p>
              <Link href="/about" className="btn-outline reveal">
                Our Story <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="relative reveal-right">
              <div
                className="img-container"
                style={{
                  aspectRatio: '4/5',
                  position: 'relative',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Team at work"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85) contrast(1.05)',
                  }}
                />
                {/* Floating card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    background: '#D4A853',
                    padding: '24px 32px',
                    maxWidth: '240px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '2.5rem',
                      fontWeight: 600,
                      color: '#0D0D0D',
                      lineHeight: 1,
                    }}
                  >
                    5+
                  </p>
                  <p
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(13,13,13,0.7)',
                      marginTop: '4px',
                    }}
                  >
                    Years of Crafting Bold Brands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-tag mb-6 reveal">What We Do</p>
              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  lineHeight: 1.15,
                }}
              >
                Services built for{' '}
                <em className="grad-text">impact</em>
              </h2>
            </div>
            <Link href="/services" className="btn-outline reveal" style={{ flexShrink: 0 }}>
              All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px stagger" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal card-hover group"
                style={{
                  background: '#0D0D0D',
                  padding: '40px',
                  cursor: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,168,83,0.05), transparent)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#D4A853',
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  {s.no}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.7rem',
                    fontWeight: 500,
                    color: '#F5F0E8',
                    marginBottom: '14px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    color: 'rgba(245,240,232,0.5)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(212,168,83,0.7)',
                        border: '1px solid rgba(212,168,83,0.2)',
                        padding: '4px 10px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-tag mb-6 reveal">Featured Work</p>
              <h2
                className="reveal"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  lineHeight: 1.15,
                }}
              >
                Stories we&apos;ve{' '}
                <em className="grad-text">told</em>
              </h2>
            </div>
            <Link href="/portfolio" className="btn-outline reveal" style={{ flexShrink: 0 }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, i) => (
              <Link
                key={i}
                href="/portfolio"
                className="reveal card-hover group block"
                style={{ position: 'relative', aspectRatio: i === 0 ? '4/3' : '4/3', overflow: 'hidden' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.6)',
                    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease',
                  }}
                  className="group-hover:scale-105 group-hover:brightness-75"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#D4A853',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '2rem',
                      fontWeight: 500,
                      color: '#F5F0E8',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: '#D4A853',
                    padding: '10px',
                    display: 'flex',
                  }}
                >
                  <ArrowUpRight size={18} color="#0D0D0D" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-tag justify-center mb-8 reveal">Client Love</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '4rem',
            }}
          >
            What brands say about us
          </h2>

          <div style={{ minHeight: '220px', position: 'relative' }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: activeTestimonial === i ? 1 : 0,
                  transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease',
                  pointerEvents: activeTestimonial === i ? 'all' : 'none',
                }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} fill="#D4A853" color="#D4A853" />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: '#F5F0E8',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #D4A853',
                    }}
                  />
                  <div className="text-left">
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
                        fontSize: '0.8rem',
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                style={{
                  width: activeTestimonial === i ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeTestimonial === i ? '#D4A853' : 'rgba(212,168,83,0.3)',
                  border: 'none',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <Link href="/testimonials" className="btn-outline mt-10 inline-flex">
            Read All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-tag mb-8 reveal">How We Work</p>
          <h2
            className="reveal"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '4rem',
              maxWidth: '600px',
            }}
          >
            Our process is <em className="grad-text">simple</em> but powerful
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your brand, audience, and goals. No guesswork — pure research.' },
              { step: '02', title: 'Strategy', desc: 'We craft a bespoke strategy with clear milestones, KPIs and creative direction.' },
              { step: '03', title: 'Creation', desc: 'Our team brings the strategy to life with content, campaigns and designs that wow.' },
              { step: '04', title: 'Growth', desc: 'We track, optimise and scale everything to ensure lasting, compounding results.' },
            ].map((p, i) => (
              <div key={i} className="reveal">
                <div
                  className="gold-line mb-6"
                  style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }}
                />
                <span
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#D4A853',
                    letterSpacing: '0.15em',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  {p.step}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem',
                    fontWeight: 500,
                    color: '#F5F0E8',
                    marginBottom: '12px',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    color: 'rgba(245,240,232,0.5)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
