import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  const { ref, isVisible } = useScrollAnimation()
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'CampusConnect',
      description: 'A comprehensive campus ecosystem with social feed, marketplace, events, study groups, and real-time chat. Built to solve real student problems.',
      stack: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      repoLink: '#',
      stars: 8,
      forks: 2,
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather app that fetches real-time data from OpenWeather API. Features location search and 5-day forecast.',
      stack: ['React', 'OpenWeather API', 'CSS3'],
      liveLink: '#',
      repoLink: '#',
      stars: 5,
      forks: 1,
      featured: false,
    },
    {
      title: 'Task Manager',
      description: 'A productivity app with CRUD operations, filtering, and user-specific data persistence using Firebase.',
      stack: ['JavaScript', 'Firebase', 'HTML5', 'CSS3'],
      liveLink: '#',
      repoLink: '#',
      stars: 4,
      forks: 0,
      featured: false,
    },
    {
      title: 'Portfolio V1',
      description: 'My first portfolio built with vanilla HTML, CSS, and JavaScript. Learned responsive design and DOM manipulation.',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      repoLink: '#',
      stars: 3,
      forks: 1,
      featured: false,
    },
    {
      title: 'Calculator App',
      description: 'A fully functional calculator with keyboard support, history tracking, and clean UI design.',
      stack: ['JavaScript', 'CSS3', 'HTML5'],
      liveLink: '#',
      repoLink: '#',
      stars: 2,
      forks: 0,
      featured: false,
    },
    {
      title: 'Recipe Finder',
      description: 'Search and save recipes using a public API. Features ingredient filtering and favorite saving with local storage.',
      stack: ['JavaScript', 'API Integration', 'CSS3'],
      liveLink: '#',
      repoLink: '#',
      stars: 6,
      forks: 2,
      featured: false,
    },
  ]

  const categories = ['All', 'React', 'JavaScript', 'Firebase', 'API']

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.stack.includes(filter))

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold text-primary mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Projects
          </h2>
          <div className={`w-16 h-1 bg-accent mx-auto rounded-full mb-4 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className={`text-secondary max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Here are some things I've built. Each project taught me something new about writing clean, functional code.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-accent text-white'
                  : 'bg-light text-secondary hover:bg-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-light rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors rounded-2xl z-10 pointer-events-none"></div>

              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                  FEATURED
                </span>
              )}

              {/* Project Image */}
              <div className="aspect-video bg-surface flex items-center justify-center border-b border-border relative overflow-hidden">
                <img
                  src={`/projects/${project.title.toLowerCase().replace(/\s/g, '-')}.png`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-surface">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <p className="text-secondary text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center gap-4 text-xs text-secondary mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    {project.forks}
                  </span>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex-1 text-center py-2 bg-accent text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors">
                    Live Demo
                  </a>
                  <a href={project.repoLink} className="flex-1 text-center py-2 border border-border text-primary rounded-lg font-medium text-sm hover:bg-border transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less Button */}
        {filteredProjects.length > 3 && (
          <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects