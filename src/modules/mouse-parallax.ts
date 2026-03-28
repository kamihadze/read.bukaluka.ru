export function initMouseParallax() {
  const chars = document.querySelectorAll<HTMLElement>('[data-parallax]')
  if (!chars.length) return

  chars.forEach((el) => {
    let isHovered = false
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let animId = 0

    function animate() {
      if (!isHovered) {
        currentX += (0 - currentX) * 0.08
        currentY += (0 - currentY) * 0.08
      } else {
        currentX += (mouseX - currentX) * 0.1
        currentY += (mouseY - currentY) * 0.1
      }

      el.style.translate = `${currentX}px ${currentY}px`

      if (isHovered || Math.abs(currentX) > 0.1 || Math.abs(currentY) > 0.1) {
        animId = requestAnimationFrame(animate)
      } else {
        el.style.translate = ''
        animId = 0
      }
    }

    el.addEventListener('mouseenter', () => {
      isHovered = true
      if (!animId) animId = requestAnimationFrame(animate)
    })

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const speed = parseFloat(el.dataset.parallax || '20')
      mouseX = (e.clientX - centerX) / rect.width * speed
      mouseY = (e.clientY - centerY) / rect.height * speed
    })

    el.addEventListener('mouseleave', () => {
      isHovered = false
    })
  })
}
