import { useEffect, useRef, useState } from 'react'

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 80 },
        { name: 'DOM Manipulation', level: 75 },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Firebase', level: 75 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'REST APIs', level: 70 },
        { name: 'Vercel', level: 75 },
      ],
    },
    {
      title: 'Currently Learning',
      skills: [
        { name: 'TypeScript', level: 40 },
        { name: 'Node.js', level: 35 },
        { name: 'Testing (Jest)', level: 30 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-light" ref={sectionRef}>
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
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`bg-surface rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="text-lg font-bold text-primary mb-6 pb-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary text-sm font-medium">{skill.name}</span>
                      <span className="text-accent text-xs font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Background */}
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      {/* Animated Progress Fill */}
                      <div
                        className={`h-full bg-accent rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 150 + skillIndex * 100 + 300}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Stats */}
        <div className={`mt-16 grid grid-cols-3 gap-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-accent mb-1">10+</div>
            <div className="text-secondary text-sm">Technologies</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-accent mb-1">6+</div>
            <div className="text-secondary text-sm">Months Coding</div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="text-3xl font-bold text-accent mb-1">∞</div>
            <div className="text-secondary text-sm">Curiosity</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills