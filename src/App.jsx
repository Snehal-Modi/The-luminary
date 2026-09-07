import Navigation from './components/Navigation/Navigation.jsx'
import Hero from './components/Hero/Hero.jsx'
import ExperienceNav from './components/ExperienceNav/ExperienceNav.jsx'
import RenderingGallery from './components/RenderingGallery/RenderingGallery.jsx'
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
        <RenderingGallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
