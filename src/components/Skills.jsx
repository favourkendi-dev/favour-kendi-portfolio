function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'Responsive Design', 'DOM Manipulation'],
    },
    {
      title: 'Backend & Tools',
      skills: ['Firebase', 'Git', 'GitHub', 'REST APIs', 'Vercel'],
    },
    {
      title: 'Currently Learning',
      skills: ['TypeScript', 'Node.js', 'Testing (Jest)'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life. Always adding more to the list.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-secondary text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills