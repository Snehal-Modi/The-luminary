const experiences = [
  {
    number: '01',
    title: 'Renderings',
    description: 'Studies in light and material',
    href: '#renderings',
  },
  {
    number: '02',
    title: '3D Models',
    description: 'Objects beyond the sketch',
    href: '#models',
  },
  {
    number: '03',
    title: 'Who Am I',
    description: 'The artist behind the work',
    href: '#about',
  },
]

function ExperienceNav() {
  return (
    <section className="experience-nav" id="experiences" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">The studio</p>
        <h2 id="experience-title">Enter a point of view.</h2>
      </div>
      <nav className="experience-list" aria-label="Studio experiences">
        {experiences.map((experience) => (
          <a className="experience-link" href={experience.href} key={experience.number}>
            <span className="experience-number">{experience.number}</span>
            <span className="experience-copy">
              <strong>{experience.title}</strong>
              <span>{experience.description}</span>
            </span>
            <span className="experience-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </section>
  )
}

export default ExperienceNav
