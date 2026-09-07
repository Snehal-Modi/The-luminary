import Navigation from './components/Navigation/Navigation.jsx'
import Hero from './components/Hero/Hero.jsx'
import ExperienceNav from './components/ExperienceNav/ExperienceNav.jsx'
import Footer from './components/Footer/Footer.jsx'
import IntroSequence from './components/IntroSequence/IntroSequence.jsx'

function App() {
  return (
    <div className="site-shell">
      <IntroSequence />
      <Navigation />
      <main>
        <Hero />
        <ExperienceNav />
      </main>
      <Footer />
    </div>
  )
}

export default App
