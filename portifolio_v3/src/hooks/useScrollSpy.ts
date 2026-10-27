import { useState, useEffect } from 'react'

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'leadership', 'education', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
