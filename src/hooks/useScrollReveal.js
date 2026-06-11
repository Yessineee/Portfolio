import { useEffect, useRef } from "react"

export default function useScrollReveal({ delay = "0s", duration = "0.6s", distance = "24px", threshold = 0.1 } = {}) {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial hidden state
    element.style.opacity = "0"
    element.style.transform = `translateY(${distance})`
    element.style.transition = `opacity ${duration} ease, transform ${duration} ease`
    element.style.transitionDelay = delay
    // delay, duration, distance are CSS properties —
    // they belong on the element style, NOT in IntersectionObserver options.

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
        observer.unobserve(element)
      }
    }, { threshold })
    // IntersectionObserver only gets threshold here —
    // nothing else, which was causing the error.

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, duration, distance, threshold])

  return ref
}