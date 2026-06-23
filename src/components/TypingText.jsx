import { useState, useEffect } from 'react'

function TypingText() {
  const phrases = [
    'Fullstack Developer',
    'React & Firebase Builder',
    'Problem Solver',
    'Available for Hire',
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseDuration = 2000

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      const deleteTimer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(deleteTimer)
    }

    if (currentText === phrase) {
      setIsPaused(true)
      return
    }

    const typeTimer = setTimeout(() => {
      setCurrentText(phrase.slice(0, currentText.length + 1))
    }, typingSpeed)
    return () => clearTimeout(typeTimer)
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases])

  return (
    <span className="inline-flex items-center">
      <span className="text-accent font-semibold">{currentText}</span>
      <span className="w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
    </span>
  )
}

export default TypingText