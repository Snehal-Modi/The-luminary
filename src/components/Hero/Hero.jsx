import HeroArtwork from './HeroArtwork.jsx'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HeroArtwork />
      <div className="hero-content">
        <p className="eyebrow">Jewelry design / digital artistry</p>
        <h1 id="hero-title">The<br /><em>Luminary</em></h1>
        <p className="hero-introduction">
          A study in form, light, and the quiet character of objects made to endure.
        </p>
        <a className="text-link" href="#experiences">
          <span>Enter the studio</span>
          <span className="text-link-arrow" aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="hero-index" aria-hidden="true">01 <span>/</span> 03</div>
    </section>
  )
}

export default Hero
