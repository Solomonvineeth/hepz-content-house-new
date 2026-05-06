import Head from 'next/head'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

const services = [
  'Brand Strategy',
  'Content Creation',
  'Social Media Marketing',
  'Video Production',
  'Influencer Marketing',
  'Brand Identity Design',
  'Not Sure Yet',
]

export default function Contact() {
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })

  const toggleService = (s) => {
    setSelected(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact — Hepz Content House</title>
        <meta name="description" content="Get in touch with Hepz Content House. Start your brand journey today." />
      </Head>

      {/* Hero */}
      <section className="pt-44 pb-16 px-6 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at right, #D4A853 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto relative">
          <p className="section-tag mb-8">Get In Touch</p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
            }}
          >
            Let&apos;s build something
            <br />
            <em className="grad-text">remarkable</em> together.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">

          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="section-tag mb-8 reveal">Direct Lines</p>
            <div className="space-y-8 mb-12">
              {[
                { Icon: Mail, label: 'Email Us', value: 'hello@hepzcontenthouse.com', link: 'mailto:hello@hepzcontenthouse.com' },
                { Icon: Phone, label: 'Call Us', value: '+91 98765 43210', link: 'tel:+919876543210' },
                { Icon: MapPin, label: 'Find Us', value: 'Chennai, Tamil Nadu, India', link: null },
              ].map(({ Icon, label, value, link }, i) => (
                <div key={i} className="reveal flex items-start gap-4">
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(212,168,83,0.1)',
                      border: '1px solid rgba(212,168,83,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: '#D4A853' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '4px' }}>
                      {label}
                    </p>
                    {link
                      ? <a href={link} style={{ fontFamily: 'Outfit, sans-serif', color: '#F5F0E8', fontSize: '0.95rem', transition: 'color 0.3s ease' }}
                           onMouseEnter={e => e.currentTarget.style.color = '#D4A853'}
                           onMouseLeave={e => e.currentTarget.style.color = '#F5F0E8'}>
                          {value}
                        </a>
                      : <p style={{ fontFamily: 'Outfit, sans-serif', color: '#F5F0E8', fontSize: '0.95rem' }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <p className="section-tag mb-4">Office Hours</p>
              <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                Monday — Friday<br />
                9:00 AM — 7:00 PM IST<br />
                <br />
                <span style={{ color: 'rgba(245,240,232,0.3)' }}>
                  We typically respond to all enquiries within 24 hours.
                </span>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center h-full"
                style={{ minHeight: '500px', border: '1px solid rgba(212,168,83,0.2)', padding: '60px' }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(212,168,83,0.1)',
                    border: '1px solid #D4A853',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <Check size={28} style={{ color: '#D4A853' }} />
                </div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: '#F5F0E8',
                    marginBottom: '16px',
                  }}
                >
                  Message received!
                </h3>
                <p style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(245,240,232,0.5)', lineHeight: 1.8, maxWidth: '400px' }}>
                  Thank you for reaching out. The Hepz team will get back to you within 24 hours to schedule your complimentary strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: 'name', label: 'Full Name *', placeholder: 'Your name', type: 'text' },
                    { id: 'email', label: 'Email Address *', placeholder: 'your@email.com', type: 'email' },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id}>
                      <label
                        htmlFor={id}
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.7rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'rgba(245,240,232,0.5)',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id]}
                        onChange={e => setForm({ ...form, [id]: e.target.value })}
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          padding: '12px 16px',
                          color: '#F5F0E8',
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = '#D4A853'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}
                </div>

                {/* Company + Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,240,232,0.5)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Your brand name"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '12px 16px',
                        color: '#F5F0E8',
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = '#D4A853'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,240,232,0.5)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                      style={{
                        width: '100%',
                        background: '#0D0D0D',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '12px 16px',
                        color: form.budget ? '#F5F0E8' : 'rgba(245,240,232,0.3)',
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '0.95rem',
                        outline: 'none',
                        cursor: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = '#D4A853'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="">Select budget</option>
                      <option value="under-25k">Under ₹25,000/mo</option>
                      <option value="25k-75k">₹25,000 — ₹75,000/mo</option>
                      <option value="75k-150k">₹75,000 — ₹1,50,000/mo</option>
                      <option value="150k+">₹1,50,000+/mo</option>
                      <option value="project">One-time project</option>
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.5)',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    Services Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.75rem',
                          letterSpacing: '0.1em',
                          padding: '8px 16px',
                          background: selected.includes(s) ? '#D4A853' : 'transparent',
                          color: selected.includes(s) ? '#0D0D0D' : 'rgba(245,240,232,0.6)',
                          border: `1px solid ${selected.includes(s) ? '#D4A853' : 'rgba(255,255,255,0.12)'}`,
                          cursor: 'none',
                          transition: 'all 0.2s ease',
                          fontWeight: selected.includes(s) ? 600 : 400,
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.5)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Tell Us About Your Brand *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your brand, your goals, and what you're looking for..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '14px 16px',
                      color: '#F5F0E8',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      lineHeight: 1.7,
                    }}
                    onFocus={e => e.target.style.borderColor = '#D4A853'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', gap: '10px' }}>
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
