import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-700 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl font-bold text-primary mb-4">
              Hi, I'm Favour Kendi
            </h1>
            <p className="text-xl text-secondary mb-8">
              Fullstack Developer in Training at Moringa School
            </p>
            <a
              href="#projects"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              View My Work
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