import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return <footer><div className="container footer-grid"><div><Link href="/" className="brand footer-brand" aria-label="CS Services home"><span className="brand-mark">C</span><span>SS</span></Link><p className="footer-desc">Consultancy and services<br />for film &amp; media.</p></div><div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About CS Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div></div><div><p className="footer-label">Company</p><div className="legal"><p>CS Services Ltd<br />Company number: 17500631</p><a className="footer-contact-line" href="tel:+443000141056"><Phone size={14} aria-hidden="true" />+44 300 014 1056</a><a className="footer-contact-line" href="mailto:info@csservices.io"><Mail size={14} aria-hidden="true" />info@csservices.io</a><p className="footer-address"><MapPin size={14} aria-hidden="true" /><span>71–75 Shelton Street<br />Covent Garden, London<br />WC2H 9JQ</span></p></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CS Services Ltd. All rights reserved.</span><span className="footer-legal-links"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link><Link href="/disclaimer">Disclaimer</Link></span></div></footer>
}

export default SiteFooter
