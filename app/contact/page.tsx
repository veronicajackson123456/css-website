'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const body = [
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Service: ${fields.get('service')}`,
      '',
      'Project description:',
      String(fields.get('description') ?? ''),
    ].join('\n')
    const subject = `Website enquiry — ${fields.get('service')}`
    window.location.href = `mailto:info@csservices.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return <main className="site-shell"><SiteHeader /><section className="inner-page contact-page"><div className="container">
    <p className="section-kicker">CS Services / Enquiries</p>
    <h1>Tell us about<br /><em>your project.</em></h1>
    <div className="contact-layout">
      <div>
        <p className="page-lede">Whether you are exploring consultancy, locations, equipment, studio rental or marketing support, tell us what you are working on and what you need next.</p>
        <div className="contact-email-card">
          <p className="section-kicker">Prefer email?</p>
          <a href="mailto:info@csservices.io">info@csservices.io <ArrowUpRight aria-hidden="true" /></a>
          <p className="contact-email-note">Share a few details about your production and the support you are looking for.</p>
        </div>
        <img className="contact-image" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85" alt="Film camera on a production set" />
        <p className="image-note">Illustrative production imagery</p>
      </div>
      {sent ? <div className="success-box" role="status">Your email app should open with your enquiry prepared. Review and send it to complete your enquiry. If it does not open, email <a href="mailto:info@csservices.io">info@csservices.io</a> directly.</div> : <form className="enquiry-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name<input id="name" required name="name" autoComplete="name" /></label>
        <label htmlFor="email">Work email<input id="email" required type="email" name="email" autoComplete="email" /></label>
        <label htmlFor="service">Service of interest<select id="service" required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Film Industry Consultancy</option><option>Location Scouting</option><option>Equipment Rental</option><option>Studio Rental</option><option>Marketing</option><option>Multiple Services</option></select></label>
        <label htmlFor="description">Project description<textarea id="description" required name="description" rows={6} /></label>
        <label className="check"><input type="checkbox" required /> I consent to preparing an email with my enquiry details.</label>
        <p className="contact-email-note">Please read our <Link href="/privacy-policy">privacy policy</Link>.</p>
        <button className="button button-amber" type="submit">Prepare enquiry email <ArrowUpRight size={16} /></button>
      </form>}
    </div>
  </div></section><SiteFooter /></main>
}
