function Projects() {
  const projects = [
    {
      title: 'CampusConnect',
      description: 'A comprehensive campus ecosystem with social feed, marketplace, events, study groups, and real-time chat. Built to solve real student problems.',
      stack: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      repoLink: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather app that fetches real-time data from OpenWeather API. Features location search and 5-day forecast.',
      stack: ['React', 'OpenWeather API', 'CSS3'],
      liveLink: '#',
      repoLink: '#',
      featured: false,
    },
    {
      title: 'Task Manager',
      description: 'A productivity app with CRUD operations, filtering, and user-specific data persistence using Firebase.',
      stack: ['JavaScript', 'Firebase', 'HTML5', 'CSS3'],
      liveLink: '#',
      repoLink: '#',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Here are some things I've built. Each project taught me something new about writing clean, functional code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-light rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-surface flex items-center justify-center border-b border-border">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <p className="text-secondary text-sm">Project Screenshot</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 text-center py-2 bg-accent text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="flex-1 text-center py-2 border border-border text-primary rounded-lg font-medium text-sm hover:bg-border transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects