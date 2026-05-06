import Head from 'next/head'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    title: 'Why Every Brand Needs a Content Ecosystem, Not Just a Strategy',
    excerpt: 'Most brands treat content as a checklist. The brands that win treat it as a living, breathing ecosystem. Here\'s what that means and how to build one.',
    category: 'Brand Strategy',
    readTime: '7 min read',
    date: 'Dec 15, 2024',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
    featured: true,
  },
  {
    title: 'The Art of Authentic Brand Storytelling on Instagram',
    excerpt: 'Scroll past the noise. Here\'s how to craft Instagram content that actually stops people and makes them feel something — and why that\'s all that matters.',
    category: 'Social Media',
    readTime: '5 min read',
    date: 'Dec 5, 2024',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
  },
  {
    title: 'What Indian D2C Brands Get Wrong About Influencer Marketing',
    excerpt: 'Follower count is a vanity metric. Real influencer marketing is about alignment, authenticity and audience trust. Here\'s how to get it right.',
    category: 'Influencer Marketing',
    readTime: '6 min read',
    date: 'Nov 22, 2024',
    img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=700&q=80',
  },
  {
    title: '5 Brand Identity Mistakes That Kill Credibility',
    excerpt: 'Your visual identity is your first handshake. These five common mistakes could be costing you trust, clients, and growth before you even say hello.',
    category: 'Brand Identity',
    readTime: '4 min read',
    date: 'Nov 10, 2024',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80',
  },
  {
    title: 'Video vs. Static: What Actually Drives Engagement in 2024',
    excerpt: 'We analysed 200+ posts across 20 brand accounts to answer the question every marketer is asking. The results might surprise you.',
    category: 'Content',
    readTime: '5 min read',
    date: 'Oct 30, 2024',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&q=80',
  },
  {
    title: 'How We Took a Local Chennai Brand to 500K Followers',
    excerpt: 'A behind-the-scenes look at the exact strategy, content types, and posting cadence we used to grow a local F&B brand\'s social media presence — fast.',
    category: 'Case Study',
    readTime: '8 min read',
    date: 'Oct 15, 2024',
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=700&q=80',
  },
]

const categoryColors = {
  'Brand Strategy': '#D4A853',
  'Social Media': '#8A9E85',
  'Influencer Marketing': '#C4622D',
  'Brand Identity': '#E8C4A0',
  'Content': '#D4A853',
  'Case Study': '#8A9E85',
}

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <Head>
        <title>Blog — Hepz Content House</title>
        <meta name="description" content="Brand marketing insights, content strategy tips and behind-the-scenes stories from the Hepz team." />
      </Head>

      {/* Hero */}
      <section className="pt-44 pb-16 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-tag mb-8">Insights & Ideas</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
            }}
          >
            The Hepz <em className="grad-text">Journal</em>
          </h1>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <Link href="#" className="group block reveal card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div className="img-container" style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={featured.img}
                    alt={featured.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.7)',
                      transition: 'transform 0.8s ease',
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div
                  style={{ padding: '48px', background: '#0D0D0D', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: categoryColors[featured.category] || '#D4A853',
                        border: `1px solid ${categoryColors[featured.category] || '#D4A853'}40`,
                        padding: '4px 12px',
                      }}
                    >
                      {featured.category}
                    </span>
                    <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.65rem', color: 'rgba(245,240,232,0.4)' }}>
                      Featured
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      fontWeight: 400,
                      color: '#F5F0E8',
                      lineHeight: 1.2,
                      marginBottom: '16px',
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8, marginBottom: '24px' }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                        {featured.date}
                      </span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                        · {featured.readTime}
                      </span>
                    </div>
                    <div
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: '#D4A853',
                        padding: '8px',
                        display: 'flex',
                      }}
                    >
                      <ArrowUpRight size={16} color="#0D0D0D" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {rest.map((post, i) => (
              <Link key={i} href="#" className="group block reveal card-hover">
                <div className="img-container" style={{ aspectRatio: '16/10', overflow: 'hidden', marginBottom: '20px' }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.65)',
                      transition: 'transform 0.6s ease',
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: categoryColors[post.category] || '#D4A853',
                      border: `1px solid ${categoryColors[post.category] || '#D4A853'}40`,
                      padding: '3px 10px',
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    lineHeight: 1.25,
                    marginBottom: '12px',
                    transition: 'color 0.3s ease',
                  }}
                  className="group-hover:text-gold"
                >
                  {post.title}
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <Clock size={11} style={{ color: 'rgba(245,240,232,0.3)' }} />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>
                    {post.readTime} · {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
