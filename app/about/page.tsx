import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function About() {
  return <main className="site-shell"><SiteHeader /><section className="inner-page"><div className="container">
    <p className="section-kicker">CS Services / About</p>
    <h1>Supporting the business<br />of <em>film &amp; media.</em></h1>
    <div className="inner-feature"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85" alt="Cinema camera and film production environment" /><div><p className="page-lede">CS Services supports the practical and strategic requirements of film and media projects. Our services span consultancy, location scouting, equipment rental, studio rental and marketing support.</p><p className="image-note">Illustrative production imagery</p></div></div>
    <div className="inner-copy">
      <h2>Our focus</h2>
      <p>By bringing these areas together under one brand, CS Services provides a starting point for conversations about production requirements, creative environments and the commercial considerations surrounding film and media work.</p>
      <h2>How we approach projects</h2>
      <p>Every enquiry starts with understanding the brief. We consider the creative ambition, practical requirements and next steps that are relevant to your project.</p>
      <h2>CEO</h2>
      <p>Gillian Peat provides strategic leadership and a forward-looking vision, supporting the development of compelling screen productions and meaningful industry partnerships. With a focus on the creative and commercial dimensions of filmmaking, she champions collaboration between production professionals, creative talent, and industry partners. As CEO, Gillian is committed to supporting the company&apos;s growth, strengthening relationships across the film and media industry, and helping bring ambitious screen projects to life.</p>
    </div>
    <Link className="button button-amber" href="/contact">Discuss your requirements <ArrowUpRight size={16} /></Link>
  </div></section><SiteFooter /></main>
}
