import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      cursor.style.transform += ' scale(2.5)'
      follower.style.width = '60px'
      follower.style.height = '60px'
    }
    const onMouseLeaveLink = () => {
      follower.style.width = '36px'
      follower.style.height = '36px'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const links = document.querySelectorAll('a, button, .card-hover')
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
