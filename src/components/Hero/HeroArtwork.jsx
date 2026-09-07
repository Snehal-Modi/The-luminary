import { useState } from 'react'

function HeroArtwork() {
  const [hasArtwork, setHasArtwork] = useState(true)

  return (
    <div className={`hero-artwork${hasArtwork ? '' : ' hero-artwork-fallback'}`} aria-hidden="true">
      {hasArtwork && (
        <img
          src="/assets/hero/hero-background.png"
          alt=""
          onError={() => setHasArtwork(false)}
        />
      )}
    </div>
  )
}

export default HeroArtwork