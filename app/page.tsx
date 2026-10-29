import Link from 'next/link'
import { ArrowUpRight, Check, Mail, MapPin, MoveRight, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

const services = [
  { number: '01', title: 'Film Industry Consultancy', text: 'Practical and strategic guidance for film and media projects, helping you clarify requirements, consider options and navigate production-related challenges.', href: '/services/film-industry-consultancy', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Location Scouting', text: 'Explore filming environments that align with your creative direction, location requirements and production brief.', href: '/services/location-scouting', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'Equipment Rental', text: "Discuss production equipment requirements and explore rental options suited to your project's technical needs and schedule.", href: '/services/equipment-rental', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85' },
  { number: '04', title: 'Studio Rental', text: 'Explore studio rental requirements for filming, production and creative work, with enquiries tailored to your space and project needs.', href: '/services/studio-rental', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85' },
  { number: '05', title: 'Marketing', text: 'Develop a clear project position, understand your intended audience and shape marketing activity around the goals and stage of your production.', href: '/services/marketing', image: '/images/css-marketing-feature.png' },
]

const principles = ['Project-Focused', 'Connected Services', 'Practical Thinking', 'Clear Communication']

export default function Home() {
  return <main className="site-shell">
    <SiteHeader />
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-grain" />
      <div className="container hero-content">
        <p className="eyebrow"><span /> Film · Media · Production</p>
        <h1>Your vision.<br /><em>Our production</em><br />expertise.</h1>
        <p className="hero-copy">From film industry consultancy and location scouting to equipment and studio rental and marketing services, CS Services supports the practical and strategic needs of film and media projects.</p>
        <div className="hero-actions"><Link className="button button-amber" href="/services">Explore our services <ArrowUpRight size={16} /></Link><Link className="button button-ghost" href="/contact">Discuss your project <MoveRight size={16} /></Link></div>
      </div>
      <div className="hero-meta container"><span>London · UK</span><span>Scroll to explore <span className="scroll-line" /></span></div>
    </section>

    <section className="current-project section-pad" aria-labelledby="current-project-title">
      <div className="container current-project-grid">
        <div className="current-project-copy">
          <p className="section-kicker">Current Project</p>
          <h2 id="current-project-title">A Beautiful<br /><em>Kill</em></h2>
          <p>A Beautiful Kill is CS Services&apos; current upcoming feature film.</p>
          <p className="current-project-status"><span aria-hidden="true" />Upcoming feature film</p>
        </div>
        <figure className="current-project-trailer">
          <video controls preload="metadata" playsInline aria-label="Official trailer for A Beautiful Kill">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trailer-hsRs41SnXpUCtI6dnbpo7ezsOnOzyD.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <figcaption><span>Official trailer</span><span>A Beautiful Kill</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="intro section-pad"><div className="container intro-grid"><p className="section-kicker">01 / The CS Services approach</p><div><h2>The right support for <em>every stage</em> of production.</h2><p className="lede">Every film and media project brings its own creative ambitions, practical requirements and commercial considerations. CS Services brings together a range of services designed to help clients explore those needs and plan their next steps.</p><Link className="text-link" href="/about">Discover CS Services <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="services section-pad"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / What we do</p><h2>Film &amp; media <em>services.</em></h2></div><p>Explore the services that support the planning, resources and communications of film and media projects.</p></div><div className="service-list">{services.map((service) => <Link href={service.href} className="service-row" key={service.number}><div className="service-number">{service.number}</div><div className="service-image"><img src={service.image} alt="" /></div><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-arrow" size={23} /></Link>)}</div></div></section>

    <section className="principles section-pad"><div className="container principles-grid"><div><p className="section-kicker">03 / Why CS Services</p><h2>A considered approach<br />to <em>production.</em></h2><p className="lede">Film and media projects require clear communication, careful planning and an understanding of both creative and practical priorities.</p></div><div className="principle-list">{principles.map((item, index) => <div className="principle" key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>{['Begin with the objectives, requirements and circumstances of each project.', 'Explore complementary production and media services through one point of contact.', 'Consider every requirement with the project brief in mind.', 'Make the next steps straightforward from the outset.'][index]}</p></div></div>)}</div></div></section>

    <section className="gallery section-pad"><div className="container"><div className="section-heading"><div><p className="section-kicker">04 / Visual reference</p><h2>Production environments<br />&amp; <em>possibilities.</em></h2></div><Link className="text-link" href="/portfolio">Explore the gallery <ArrowUpRight size={16} /></Link></div><div className="gallery-grid"><div className="gallery-tile tall"><img src="https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1200&q=85" alt="Film production lighting in a studio" /><span>Studio environments</span></div><div className="gallery-tile"><img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85" alt="Professional cinema camera" /><span>Production equipment</span></div><div className="gallery-tile"><img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85" alt="Cinematic filming location" /><span>Filming locations</span></div></div></div></section>

    <section className="process section-pad"><div className="container"><p className="section-kicker">05 / The next step</p><div className="process-heading"><h2>From brief<br />to <em>next steps.</em></h2><Link className="button button-amber" href="/contact">Make an enquiry <ArrowUpRight size={16} /></Link></div><div className="process-list">{['Tell us about your project', 'Define the requirements', 'Discuss the options', 'Move forward'].map((item, i) => <div key={item} className="process-item"><span>0{i + 1}</span><p>{item}</p><Check size={17} /></div>)}</div></div></section>

    <section className="closing"><div className="container closing-inner"><p className="eyebrow"><span /> Ready when you are</p><h2>Planning your<br /><em>next production?</em></h2><p>Tell us about your project and the support you are looking for. CS Services welcomes enquiries from professionals and organisations working across film and media.</p><div className="closing-actions"><Link className="button button-amber" href="/contact">Make an enquiry <ArrowUpRight size={16} /></Link><a className="closing-phone" href="tel:+443000141056"><Phone size={16} aria-hidden="true" /> Call +44 300 014 1056</a></div></div></section>
    <footer><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">C</span><span>SS</span></div><p className="footer-desc">Consultancy and services<br />for film &amp; media.</p></div><div><p className="footer-label">Explore</p><div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About CS Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/contact">Contact</Link></div></div><div><p className="footer-label">Company</p><div className="legal"><p>CS Services Ltd<br />Company number: 17500631<br />Registered in England and Wales</p><a className="footer-contact-line" href="tel:+443000141056"><Phone size={14} aria-hidden="true" />+44 300 014 1056</a><a className="footer-contact-line" href="mailto:info@csservices.io"><Mail size={14} aria-hidden="true" />info@csservices.io</a><p className="footer-address"><MapPin size={14} aria-hidden="true" /><span>71–75 Shelton Street<br />Covent Garden, London<br />WC2H 9JQ</span></p></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CS Services Ltd. All rights reserved.</span><span className="footer-legal-links"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookie-policy">Cookies</Link><Link href="/accessibility">Accessibility</Link><Link href="/disclaimer">Disclaimer</Link></span></div></footer>
  </main>
}

export const dynamic = 'force-static'
