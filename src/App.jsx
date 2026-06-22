import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
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

        {/* About Section */}
        <About />
      </main>
    </div>
  )
}

export default App