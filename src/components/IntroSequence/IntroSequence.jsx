import { useEffect, useState } from 'react'

const titleLines = [
  {
    className: 'intro-sequence-line-small',
    characters: [
      ['T', 'origin-above-left', 620],
      ['H', 'origin-right', 720],
      ['E', 'origin-below-left', 820],
    ],
  },
  {
    className: 'intro-sequence-line-large',
    characters: [
      ['L', 'origin-left', 900],
      ['U', 'origin-above-right', 990],
      ['M', 'origin-below', 1080],
      ['I', 'origin-above-left', 1170],
      ['N', 'origin-right', 1260],
      ['A', 'origin-below-right', 1350],
      ['R', 'origin-left', 1440],
      ['Y', 'origin-above-right', 1530],
    ],
  },
]

function IntroSequence() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    const leaveDelay = mediaQuery.matches ? 900 : 4300
    const removeDelay = mediaQuery.matches ? 1500 : 5000
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), leaveDelay)
    const removeTimer = window.setTimeout(() => setIsComplete(true), removeDelay)

    return () => {
      mediaQuery.removeEventListener('change', updateMotionPreference)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (isComplete) {
    return null
  }

  return (
    <div
      className={`intro-sequence${isLeaving ? ' intro-sequence-leaving' : ''}${prefersReducedMotion ? ' intro-sequence-reduced' : ''}`}
      aria-hidden="true"
    >
      <div className="intro-sequence-content">
        <p className="intro-sequence-kicker">The studio opens</p>
        <span className="intro-sequence-rule" />
        <h1 className="intro-sequence-title">
          {titleLines.map((line) => (
            <span className={`intro-sequence-line ${line.className}`} key={line.className}>
              {line.characters.map(([character, origin, delay]) => (
                <span
                  className={`intro-sequence-character ${origin}`}
                  key={character}
                  style={{ '--intro-delay': `${delay}ms` }}
                >
                  {character}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="intro-sequence-credit">
          <span>Service by:</span>
          <strong>Hevin Bhagat</strong>
        </p>
      </div>
    </div>
  )
}

export default IntroSequence
