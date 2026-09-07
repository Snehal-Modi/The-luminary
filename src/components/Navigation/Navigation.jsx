function Navigation() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="The Luminary home">
        <span className="wordmark-mark" aria-hidden="true">L</span>
        <span>The Luminary</span>
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        <a href="#experiences">Explore</a>
        <a href="#about">About</a>
      </nav>
    </header>
  )
}

export default Navigation
