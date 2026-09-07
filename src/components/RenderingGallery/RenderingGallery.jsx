import { renderings } from '../../data/renderings.js'
import './RenderingGallery.css'

function RenderingGallery() {
  return (
    <section className="rendering-gallery" id="renderings" aria-labelledby="renderings-title">
      <div className="rendering-gallery-heading">
        <p className="eyebrow">01 / Renderings</p>
        <h2 id="renderings-title">Studies in light, form &amp; material.</h2>
        <p>Digital jewelry studies will live here as a curated exhibition.</p>
      </div>

      {renderings.length > 0 ? (
        <div className="rendering-grid">
          {renderings.map((item) => (
            <article className="rendering-card" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div><span>{item.category}</span><h3>{item.title}</h3></div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rendering-empty" role="status">
          <span className="rendering-empty-number">01</span>
          <div>
            <h3>The first collection is being prepared.</h3>
            <p>Real rendering artwork will appear here when the studio assets are added.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default RenderingGallery
