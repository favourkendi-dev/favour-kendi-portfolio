function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image or Visual */}
          <div className="relative">
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
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Building things that matter
            </h3>
            <p className="text-secondary leading-relaxed mb-6">
              I'm Favour Kendi, a fullstack developer currently training at Moringa School. 
              I got into coding because I wanted to build tools that actually help people solve real problems.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              Right now I'm focused on React and Firebase, building projects like CampusConnect — 
              a campus ecosystem with real-time chat, marketplace, and study groups. I care about 
              clean code, accessible design, and shipping work that works.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">3+</p>
                <p className="text-sm text-secondary">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">6+</p>
                <p className="text-sm text-secondary">Months Coding</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">Moringa</p>
                <p className="text-sm text-secondary">School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About