import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TypingText from './components/TypingText'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-surface rounded-xl shadow-lg flex items-center justify-center border border-border animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="text-accent font-bold text-sm">JS</span>
            </div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-surface rounded-xl shadow-lg flex items-center justify-center border border-border animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <span className="text-accent font-bold text-sm">⚛</span>
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-surface rounded-xl shadow-lg flex items-center justify-center border border-border animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
              <span className="text-accent font-bold text-xs">FB</span>
            </div>
          </div>

          <div className="text-center relative z-10 max-w-3xl mx-auto">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Hi, I'm Favour Kendi
            </h1>

            {/* Tagline with Typing Animation */}
            <p className="text-xl md:text-2xl text-secondary mb-2 font-medium min-h-[2rem]">
              I am a <TypingText />
            </p>

            {/* Role + Location */}
            <p className="text-lg text-secondary/80 mb-8 flex items-center justify-center gap-2 flex-wrap">
              <span>Fullstack Developer in Training at Moringa School</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Nairobi, Kenya
              </span>
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">3+</p>
                <p className="text-xs text-secondary">Projects</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">6+</p>
                <p className="text-xs text-secondary">Months</p>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">Moringa</p>
                <p className="text-xs text-secondary">School</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-secondary">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Top Project: <span className="text-primary font-medium">CampusConnect</span></span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center gap-2 text-secondary hover:text-accent transition-colors">
              <span className="text-xs font-medium">Scroll Down</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App