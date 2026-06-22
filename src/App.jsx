function App() {
  return (
    <div className="min-h-screen bg-light p-8">
      {/* Test 1: Custom color from your config */}
      <h1 className="text-4xl font-bold text-primary mb-4">
        Favour Kendi
      </h1>
      
      {/* Test 2: Another custom color */}
      <h2 className="text-2xl font-semibold text-secondary mb-4">
        Fullstack Developer
      </h2>
      
      {/* Test 3: Accent color */}
      <button className="bg-accent text-white px-6 py-2 rounded-lg font-medium">
        Contact Me
      </button>
      
      {/* Test 4: Utility classes */}
      <div className="mt-8 p-4 bg-white rounded-xl shadow-lg">
        <p className="text-dark">This box uses shadow and rounded utilities.</p>
      </div>
    </div>
  )
}

export default App