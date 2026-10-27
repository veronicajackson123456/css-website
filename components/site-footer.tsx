import Link from 'next/link'

export function SiteFooter() {
  return <footer><div className="container footer-grid"><div><Link href="/" className="brand footer-brand" aria-label="CS Services home"><span className="brand-mark">C</span><span>SS</span></Link><p className="footer-desc">Consultancy and services<br />for film &amp; media.</p></div><div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About CS Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div></div><div><p className="footer-label">Company</p><p className="legal">CS Services Ltd<br />Company number: 17500631<br />71–75 Shelton Street<br />Covent Garden, London<br />WC2H 9JQ</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CS Services Ltd. All rights reserved.</span><span className="footer-legal-links"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link><Link href="/disclaimer">Disclaimer</Link></span></div></footer>
}

export default SiteFooter
