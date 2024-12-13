import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App