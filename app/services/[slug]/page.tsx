import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const data: Record<string, { title: string; intro: string; points: string[]; image: string }> = {
  'film-industry-consultancy': { title: 'Film Industry Consultancy', intro: 'Practical and strategic guidance for film and media projects, helping clients clarify requirements, consider options and navigate production-related challenges.', points: ['Project type and current stage', 'Objectives and main challenges', 'Support required and proposed timescales'], image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1800&q=85' },
  'location-scouting': { title: 'Location Scouting for Film & Media', intro: 'Explore locations against creative direction and practical production requirements, from atmosphere and access to permissions and proposed dates.', points: ['Desired setting and atmosphere', 'General region, access and logistics', 'Shoot dates and relevant creative brief'], image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85' },
  'equipment-rental': { title: 'Equipment Rental for Production', intro: 'Discuss production equipment requirements and explore rental options suited to your project’s technical needs and schedule.', points: ['Equipment categories and specifications', 'Shoot dates, duration and quantities', 'Delivery or collection requirements'], image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=85' },
  'studio-rental': { title: 'Studio Rental for Film & Creative Production', intro: 'Explore production space requirements based on the type of shoot and the practical needs of your crew.', points: ['Space, layout and production type', 'Lighting, power, access and loading', 'Crew size, dates and duration'], image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=85' },
  marketing: { title: 'Marketing', intro: 'Develop a clear position for your film or media project, understand the audiences you want to reach and plan communications that fit the project’s goals and stage.', points: ['Project positioning, audience and proposition', 'Campaign objectives, channels and communications', 'Key messages, timing and practical next steps'], image: '/images/css-marketing-feature.png' },
}

export function generateStaticParams() { return Object.keys(data).map((slug) => ({ slug })) }

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = data[slug]
  if (!item) notFound()
  return <main className="site-shell"><SiteHeader /><section className="inner-page service-detail"><div className="container"><p className="section-kicker">CS Services / Services / 0{Object.keys(data).indexOf(slug) + 1}</p><h1>{item.title}</h1><div className="detail-layout"><div><p className="page-lede">{item.intro}</p><div className="inner-copy"><h2>What to include in an enquiry</h2><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul><p>Availability, permissions, inventory and commercial terms are discussed against the details of each individual brief. CS Services does not present illustrative information as confirmed availability or completed work.</p></div><Link className="button button-amber" href="/contact">Discuss your requirements <ArrowUpRight data-icon="inline-end" /></Link></div><figure className="detail-image"><img src={item.image} alt="Illustrative film production environment" /><figcaption>Illustrative production imagery</figcaption></figure></div></div></section><SiteFooter /></main>
}

export const dynamic = 'force-static'
