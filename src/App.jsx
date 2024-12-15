import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home title="Hello..." message='"The magic you are looking for is in the work you are avoiding."'/>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
