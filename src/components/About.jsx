import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function About() {
  const { ref, isVisible } = useScrollAnimation()
  const [counts, setCounts] = useState({ projects: 0, months: 0 })

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      let step = 0
      const interval = setInterval(() => {
        step++
        setCounts({
          projects: Math.min(Math.round((3 / steps) * step), 3),
          months: Math.min(Math.round((6 / steps) * step), 6),
        })
        if (step >= steps) clearInterval(interval)
      }, duration / steps)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const journeyItems = [
    { year: '2025', event: 'Started learning HTML & CSS' },
    { year: '2026', event: 'Joined Moringa School' },
    { year: '2026', event: 'Built first React project' },
  ]

  const whatIDo = [
    'Build responsive web applications',
    'Create real-time features with Firebase',
    'Design clean, user-friendly interfaces',
    'Write maintainable, documented code',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold text-primary mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            About Me
          </h2>
          <div className={`w-16 h-1 bg-accent mx-auto rounded-full transition-all duration-700 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Photo */}
            <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="aspect-square bg-surface rounded-2xl shadow-lg flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <p className="text-secondary font-medium">Your Photo Here</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10"></div>
            </div>

            {/* Journey Timeline */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                My Journey
              </h4>
              <div className="space-y-4">
                {journeyItems.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 text-sm font-bold text-accent">{item.year}</div>
                    <div className="flex-1 pb-4 border-l-2 border-border pl-4 relative">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-accent rounded-full"></div>
                      <p className="text-secondary text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Bio Text */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Building things that matter
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                I'm Favour Kendi, a fullstack developer currently training at Moringa School. 
                I got into coding because I wanted to build tools that actually help people solve real problems.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                Right now I'm focused on React and Firebase, building projects like CampusConnect — 
                a campus ecosystem with real-time chat, marketplace, and study groups. I care about 
                clean code, accessible design, and shipping work that works.
              </p>

              {/* Fun Fact */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6">
                <p className="text-accent text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Fun Fact: When I'm not coding, I'm exploring new tech trends and mentoring fellow students
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h4 className="font-bold text-primary mb-4">What I Do</h4>
              <div className="space-y-3">
                {whatIDo.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Stats */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t border-border transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{counts.projects}+</p>
                <p className="text-sm text-secondary">Projects Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">{counts.months}+</p>
                <p className="text-sm text-secondary">Months Coding</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">Moringa</p>
                <p className="text-sm text-secondary">School</p>
              </div>
            </div>

            {/* Resume Button */}
            <div className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About