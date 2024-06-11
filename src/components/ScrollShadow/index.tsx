import React, { useState, useEffect, useRef, ReactNode } from 'react'

interface ScrollShadowProps {
  scrollContainer: string
  children: ReactNode
}

const ScrollShadow: React.FC<ScrollShadowProps> = ({
  scrollContainer,
  children,
}) => {
  const scrollContainerRef = useRef<HTMLElement | null>(null)
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    scrollContainerRef.current = document.querySelector(scrollContainer)
  }, [scrollContainer])

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > 0
      ) {
        setHasShadow(true)
      } else {
        setHasShadow(false)
      }
    }

    const scrollContainerElement = scrollContainerRef.current
    if (scrollContainerElement) {
      scrollContainerElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollContainerElement) {
        scrollContainerElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-full bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-300 ${
          hasShadow ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="flex flex-row">{children}</div>
    </div>
  )
}

export default ScrollShadow
