import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function Contact() {
  return <main className="site-shell"><SiteHeader /><section className="inner-page contact-page"><div className="container">
    <p className="section-kicker">CS Services / Enquiries</p>
    <h1>Tell us about<br /><em>your project.</em></h1>
    <div className="contact-layout">
      <div>
        <p className="page-lede">Whether you are exploring consultancy, locations, equipment, studio rental or marketing support, tell us what you are working on and what you need next.</p>
        <div className="contact-phone-card">
          <p className="section-kicker">Call to discuss your project</p>
          <a href="tel:+443000141056">+44 300 014 1056 <Phone aria-hidden="true" /></a>
          <p className="contact-phone-note">Speak with CS Services about the production requirements and support you are exploring.</p>
        </div>
        <img className="contact-image" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85" alt="Film camera on a production set" />
        <p className="image-note">Illustrative production imagery</p>
      </div>
      <aside className="contact-guidance" aria-label="Enquiry details">
        <p className="section-kicker">Enquiry details</p>
        <h2>Start with the<br /><em>project brief.</em></h2>
        <p>When you call, share the production you are working on, the service you are exploring and any timing you have in mind.</p>
        <a className="button button-amber" href="tel:+443000141056">Call +44 300 014 1056 <Phone size={16} aria-hidden="true" /></a>
        <p className="contact-phone-note">For details about how we handle personal information, read our <Link href="/privacy-policy">privacy policy</Link>.</p>
      </aside>
    </div>
  </div></section><SiteFooter /></main>
}
