import Head from 'next/head'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const categories = ['All', 'Brand Strategy', 'Content', 'Video', 'Social Media', 'Identity']

const projects = [
  {
    title: 'Sugar Cosmetics',
    category: 'Brand Strategy',
    tags: ['Brand Strategy', 'Social Media'],
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    result: '3x Instagram Engagement',
    year: '2024',
  },
  {
    title: 'Puma India Campaign',
    category: 'Video',
    tags: ['Video', 'Content'],
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    result: '2M+ Views',
    year: '2024',
  },
  {
    title: 'Mamaearth Reels',
    category: 'Content',
    tags: ['Content', 'Social Media'],
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    result: '500K Organic Reach',
    year: '2023',
  },
  {
    title: 'Boat Audio',
    category: 'Social Media',
    tags: ['Social Media', 'Brand Strategy'],
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    result: '40% Sales Uplift',
    year: '2024',
  },
  {
    title: 'GlowUp Skincare',
    category: 'Identity',
    tags: ['Identity', 'Brand Strategy'],
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    result: 'Complete Brand Overhaul',
    year: '2023',
  },
  {
    title: 'Chai & Co.',
    category: 'Content',
    tags: ['Content', 'Video'],
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&q=80',
    result: '100K followers in 6mo',
    year: '2024',
  },
  {
    title: 'Zouk Bags',
    category: 'Social Media',
    tags: ['Social Media', 'Content'],
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    result: '80% Engagement Growth',
    year: '2023',
  },
  {
    title: 'Bombay Shaving Co.',
    category: 'Video',
    tags: ['Video', 'Brand Strategy'],
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    result: 'Brand Film 1.5M Views',
    year: '2024',
  },
  {
    title: 'Nykaa Fashion',
    category: 'Identity',
    tags: ['Identity', 'Content'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    result: 'Visual Identity Refresh',
    year: '2023',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory))

  return (
    <>
      <Head>
        <title>Portfolio — Hepz Content House</title>
        <meta name="description" content="Our work — brand campaigns, content, video production and identity design for India's leading brands." />
      </Head>

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6"
        style={{ background: '#0A0A0A', overflow: 'hidden' }}
      >
        <div
          className="absolute bottom-0 left-0 w-1/2 h-full opacity-15"
          style={{ background: 'radial-gradient(ellipse at left bottom, #C4622D 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag mb-8">Our Work</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
            }}
          >
            Stories we&apos;ve
            <br />
            <em className="grad-text">crafted</em>
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 py-8 sticky top-20 z-50" style={{ background: 'rgba(13,13,13,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,168,83,0.1)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '8px 20px',
                background: activeCategory === cat ? '#D4A853' : 'transparent',
                color: activeCategory === cat ? '#0D0D0D' : 'rgba(245,240,232,0.6)',
                border: `1px solid ${activeCategory === cat ? '#D4A853' : 'rgba(245,240,232,0.15)'}`,
                cursor: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="card-hover group reveal"
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  cursor: 'none',
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.55)',
                    transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease',
                  }}
                  className="group-hover:scale-105 group-hover:brightness-40"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.1) 60%)' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'rgba(13,13,13,0.5)' }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.65rem',
                      color: '#D4A853',
                      letterSpacing: '0.15em',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {p.category} · {p.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.6rem',
                      fontWeight: 500,
                      color: '#F5F0E8',
                      marginBottom: '8px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.8rem',
                      color: '#D4A853',
                      display: 'block',
                    }}
                  >
                    ✦ {p.result}
                  </span>
                </div>
                <div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: '#D4A853',
                    padding: '8px',
                    display: 'flex',
                    transform: 'translate(10px, -10px)',
                  }}
                >
                  <ArrowUpRight size={16} color="#0D0D0D" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'rgba(245,240,232,0.4)' }}>
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
