import { useEffect, useState } from 'react'
import './IntroSequence.css'

const titleLines = [
  { className: 'intro-sequence-line-small', characters: ['T', 'H', 'E'] },
  { className: 'intro-sequence-line-large', characters: ['L', 'U', 'M', 'I', 'N', 'A', 'R', 'Y'] },
]

function IntroSequence() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updateMotionPreference()

    const leaveDelay = mediaQuery.matches ? 900 : 4300
    const removeDelay = mediaQuery.matches ? 1500 : 5000
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), leaveDelay)
    const removeTimer = window.setTimeout(() => setIsComplete(true), removeDelay)

    mediaQuery.addEventListener?.('change', updateMotionPreference)
    return () => {
      mediaQuery.removeEventListener?.('change', updateMotionPreference)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (isComplete) return null

  return (
    <div className={`intro-sequence${isLeaving ? ' intro-sequence-leaving' : ''}${prefersReducedMotion ? ' intro-sequence-reduced' : ''}`} aria-hidden="true">
      <div className="intro-sequence-content">
        <p className="intro-sequence-kicker">The studio opens</p>
        <span className="intro-sequence-rule" />
        <h1 className="intro-sequence-title">
          {titleLines.map((line) => (
            <span className={`intro-sequence-line ${line.className}`} key={line.className}>
              {line.characters.map((character, index) => (
                <span className="intro-sequence-character" key={`${character}-${index}`}>{character}</span>
              ))}
            </span>
          ))}
        </h1>
        <p className="intro-sequence-credit"><span>Service by:</span><strong>Hevin Bhagat</strong></p>
      </div>
    </div>
  )
}

export default IntroSequence
